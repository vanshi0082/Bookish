const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config(); 

// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
      if (!localFilePath) return null;


      const response = await cloudinary.uploader.upload(localFilePath, {
        resource_type: "auto",
      });
  
      console.log("File uploaded to Cloudinary:", response.secure_url);
      return response;
    } catch (error) {
      console.error("Cloudinary Upload Error:", error);
  
      if (fs.existsSync(localFilePath)) {
        fs.unlinkSync(localFilePath);
      }
  
      throw error;
    }
  };
  

module.exports = { uploadOnCloudinary };
