import express from "express";

const router = express.Router();

import { uploadImage, getUploadedImage } from "../controllers/image";

router.post("/upload-image", uploadImage);
router.get("/get-uploaded-Image", getUploadedImage);

module.exports = router;