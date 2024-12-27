import { asyncHandler } from "../utils/asyncHandler.js";

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
    console.log(fullName, userName, email, password);
    

  res.status(200).json({ message: "user registered successfully" });
});

export { registerUser };
