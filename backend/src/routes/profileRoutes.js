import express from "express";
import { updateProfile, getProfile } from "../controllers/profileController.js";

const router = express.Router();

router.get("/", getProfile);
router.put("/", updateProfile);

export default router;
