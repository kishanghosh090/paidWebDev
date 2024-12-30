import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

// generate access token and refresh token
const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new ApiError(400, "user not found");
    }
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, "something went wrong");
  }
};

// register user
const registerUser = asyncHandler(async (req, res) => {
  // get user details from frontend-----
  // validate user details----
  // check if user already exists----
  // check for images and save to cloudinary
  //create user
  // remove password from response
  // check for user creation
  // retuen response

  const { fullName, userName, email, password } = req.body;

  // validate user details ----
  if (
    [fullName, userName, email, password].some((item) => item?.trim() === "")
  ) {
    throw new ApiError(400, "all fields are required");
  }

  // check if user already exists ----
  const existingUser = await User.findOne({
    $or: [{ email }, { userName }],
  });
  if (existingUser) {
    throw new ApiError(400, "user already exists");
  }
  // check for images and save to cloudinary
  const avatarLocalPath = req.files?.avatar[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "avatar is required");
  }
  let coverImageLocalPath;
  if (req.files?.coverImage !== undefined) {
    coverImageLocalPath = req.files?.coverImage[0]?.path;
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  let coverImage;
  if (coverImageLocalPath) {
    coverImage = await uploadOnCloudinary(coverImageLocalPath);
  }
  if (!avatar) {
    throw new ApiError(400, "avatar is required");
  }
  // create user------
  const user = await User.create({
    fullName,
    userName: userName.toLowerCase(),
    email,
    password,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
  });
  // check is user created----
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  if (!createdUser) {
    throw new ApiError(500, "user not created. please try again");
  }

  // return response
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "user created successfully"));
});

// login user
const loginUser = asyncHandler(async (req, res) => {
  // req body --> data
  // username or email based login
  // find the user
  // password check
  // generate access token and refresh token
  // send cookie
  // return response

  const { email, password } = req.body;

  if (!(email && password)) {
    throw new ApiError(400, "email and password are required");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(400, "user not found");
  }

  const isPasswordCorrect = await user.isPasswordCorrect(password);

  if (!isPasswordCorrect) {
    throw new ApiError(400, "password is incorrect");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  const cookieOptions = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "user logged in successfully"
      )
    );
});

// logout user
const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    {
      new: true,
    }
  );
  const cookieOptions = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .clearCookie("accessToken", cookieOptions)
    .clearCookie("refreshToken", cookieOptions)
    .json(new ApiResponse(200, null, "user logged out successfully"));
});

// refresh access token
const refreshAccessToken = asyncHandler(async (req, res) => {
  try {
    const incomingRefreshToken =
      req.cookies.refreshToken || req.body.refreshToken;
    if (!incomingRefreshToken) {
      throw new ApiError(400, "refresh token is required");
    }

    const decodedToken = await jwt.verify(
      incomingRefreshToken,
      process.env.JWT_SECRET
    );

    const user = await User.findById(decodedToken._id);
    if (!user) {
      throw new ApiError(400, "user not found");
    }

    if (user.refreshToken !== incomingRefreshToken) {
      throw new ApiError(400, "invalid refresh token");
    }

    const { accessToken, newRefreshToken } =
      await generateAccessAndRefreshToken(user._id);
    const cookieOptions = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, cookieOptions)
      .cookie("refreshToken", newRefreshToken, cookieOptions)
      .json(
        new ApiResponse(
          200,
          {
            accessToken,
            refreshToken: newRefreshToken,
          },
          "access token refreshed successfully"
        )
      );
  } catch (error) {
    return res
      .status(500)
      .json(new ApiError(500, error.message || "Invalid refresh token"));
  }
});

// change Current password
const changeCurrentPassword = asyncHandler(async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const user = await User.findById(req.user._id);
  if (!user) {
    throw new ApiError(400, "user not found");
  }
  const isPasswordCorrect = await user.isPasswordCorrect(currentPassword);
  if (!isPasswordCorrect) {
    throw new ApiError(400, "current password is incorrect");
  }
  user.password = newPassword;
  await user.save({ validateBeforeSave: false });
  return res
    .status(200)
    .json(new ApiResponse(200, null, "password changed successfully"));
});
// get current user
const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, req.user, "user found successfully"));
});

// updateAccount details
const updateAccountDetails = asyncHandler(async (req, res) => {
  const { fullName, userName, email } = req.body;
  if (!fullName && !userName && !email) {
    throw new ApiError(400, "All fields are required");
  }
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        fullName,
        userName,
        email,
      },
    },
    {
      new: true,
    }
  ).select("-password -refreshToken");
  return res
    .status(200)
    .json(new ApiResponse(200, user, "user updated successfully"));
});

// avatar update
const updateAvatar = asyncHandler(async (req, res) => {
  const avatarLocalPath = req.file.path;
  if (!avatarLocalPath) {
    throw new ApiError(400, "avatar not found");
  }
  const avatar = await uploadOnCloudinary(avatarLocalPath);
  if (!avatar.url) {
    throw new ApiError(400, "avatar not uploaded");
  }
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        avatar: avatar.url,
      },
    },
    {
      new: true,
    }
  ).select("-password -refreshToken");
  return res
    .status(200)
    .json(new ApiResponse(200, user, "avatar updated successfully"));
});

// get user profile
const getUserProfile = asyncHandler(async (req, res) => {
  const { username } = req.params;
  if (!username?.trim()) {
    throw new ApiError(400, "username is required");
  }
  const channel = await User.aggregate([
    {
      $match: {
        userName: username?.toLowerCase(),
      },
    },
    {
      $lookup: {
        from: "subscriptions",
        localField: "_id",
        foreignField: "channel",
        as: "subscribers",
      },
    },
    {
      $lookup: {
        from: "subscriptions",
        localField: "_id",
        foreignField: "subscriber",
        as: "subscribedTo",
      },
    },
    {
      $addFields: {
        subscribersCount: { $size: "$subscribers" },
        channelsSubscribedTiCount: { $size: "$subscribedTo" },
        isSubscribed: {
          $cond: {
            if: {
              $in: [req.user._id, "$subscribers.subscriber"],
              then: true,
              else: false,
            },
          },
        },
      },
    },
    {
      $project: {
        fullName: 1,
        userName: 1,
        subscribersCount: 1,
        channelsSubscribedTiCount: 1,
        isSubscribed: 1,
        avatar: 1,
        coverImage: 1,
        email: 1,
      },
    },
  ]);
  if (!channel?.length) {
    throw new ApiError(400, "channel does not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, channel[0], "channel found successfully"));
});

// get watched videos
const getWatchHistory = asyncHandler(async (req, res) => {
  const user = await User.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(req.user._id),
      },
    },
    {
      $lookup: {
        from: "videos",
        localField: "watchHistory",
        foreignField: "_id",
        as: "watchHistory",
        pipeline: [
          {
            $lookup: {
              from: "users",
              localField: "owner",
              foreignField: "_id",
              as: "owner",
              pipeline: [
                {
                  $project: {
                    fullName: 1,
                    userName: 1,
                    avatar: 1,
                  },
                },
              ],
            },
          },
          {
            $addFields: {
              owner: {
                $first: "$owner",
              },
            },
          },
        ],
      },
    },
  ]);

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        user[0].watchHistory,
        "watch history fetched successfully"
      )
    );
});

// export controllers
export {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateAccountDetails,
  getUserProfile,
  updateAvatar,
  getWatchHistory,
};
