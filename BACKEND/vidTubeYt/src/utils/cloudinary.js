import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import "dotenv/config";
// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      return null;
    }
    const result = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log(`File is uploaded on cloudinary: ${result.url}`);
    return result;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    throw error;
  }
};

export { uploadOnCloudinary };
