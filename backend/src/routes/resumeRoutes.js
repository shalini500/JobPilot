import express from "express";
import { generateResume, getResume } from "../controllers/resumeController.js";

const router = express.Router();

router.post("/generate", generateResume);
router.get("/", getResume);

export default router;
