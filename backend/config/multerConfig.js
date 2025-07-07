import multer from "multer";

const storage = multer.diskStorage({
  // TODO : ask chatGPT, update this path when you go live
  destination: "profile-imgs",
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}-${Date.now()}`)
  }
});

export const uploads = multer({storage}).single("profileimg");

// multiple file uploads
export const uploadMultiple = multer({storage}).fields([
  {
    name: "image1",
    maxCount: 1,  
  },
  {
    name: "image2",
    maxCount: 1,
  },
  {
    name: "image3",
    maxCount: 1,
  },
  {
    name: "image4",
    maxCount: 1,
  },
]);