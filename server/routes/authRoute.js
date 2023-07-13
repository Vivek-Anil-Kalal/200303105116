import express from "express";
import { auth } from "../controllers/auth.js";
import { registerUser } from "../controllers/userApis.js";

const router = express.Router();

router.post("/auth", auth);
router.post("/register", registerUser);

export default router;
