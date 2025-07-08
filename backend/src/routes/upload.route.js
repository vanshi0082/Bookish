const express = require("express");
const fs = require("fs");
const { upload } = require("../middleware/multer.middleware.js");
const { uploadOnCloudinary } = require("../utils/cloudinary.js");

const router = express.Router();

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const localFilePath = req.file?.path;
    console.log("📦 Received file:", localFilePath);

    if (!localFilePath) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const result = await uploadOnCloudinary(localFilePath);
    console.log("🖼️ Cloudinary result:", result);

    // Remove the temporary file whether upload succeeds or not.
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    // Now the result should be valid.
    return res.status(200).json({
      message: "Image uploaded successfully",
      url: result.secure_url, // This should now contain the Cloudinary URL.
    });
  } catch (error) {
    console.error("❌ Upload Error (route):", error);
    return res.status(500).json({
      message: "Image upload failed",
      error: error.message,
    });
  }
});


module.exports = router;
