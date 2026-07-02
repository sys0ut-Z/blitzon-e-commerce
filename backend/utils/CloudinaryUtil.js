import cloudinary from '../config/cloudinaryConfig.js';
import fs from 'fs';

const uploadToCloudinary = async (localFilePath) => {
  try {
    const result = await cloudinary.uploader.upload(localFilePath);

    // 🔥 Delete the file from local directory after upload
    fs.unlink(localFilePath, (err) => {
      if (err) console.error("Failed to delete local file:", err);
    });

    return result;
  } catch (error) {
    console.error("Cloudinary upload failed:", error);
  }
};

export {
  uploadToCloudinary
}