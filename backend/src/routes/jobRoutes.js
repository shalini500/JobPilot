import express from "express";
import { createJob, getJobs, getJobById } from "../controllers/jobController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Create a job (protected)
router.post("/", authMiddleware, createJob);

// Get all jobs
router.get("/", getJobs);

// Get single job
router.get("/:id", getJobById);

export default router;
