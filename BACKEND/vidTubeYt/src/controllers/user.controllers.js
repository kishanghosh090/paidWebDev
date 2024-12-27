import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

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
  console.log(req.files);

  const coverImageLocalPath = req.files?.coverImage[0]?.path;
  if (!avatarLocalPath) {
    throw new ApiError(400, "avatar is required");
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

export { registerUser };
