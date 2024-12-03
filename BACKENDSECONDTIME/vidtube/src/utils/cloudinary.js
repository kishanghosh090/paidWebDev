import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();
//Configuration---------------

// Configuration-----------------------------
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      return null;
    }
    const response = await cloudinary.uploader.upload(localFilePath);
    console.log(`file uploaded on cloudinary, File src: ${response.url}`);
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};

const deleteOnCloudinary = async (publicId) => {
  try {
    if (!publicId) {
      return null;
    }
    const response = await cloudinary.uploader.destroy(publicId);
    console.log(`file deleted on cloudinary, File src: ${response.url}`);
    return response;
  } catch (error) {
    console.log("error deleting file on cloudinary", error);

    return null;
  }
};
export { uploadOnCloudinary };
