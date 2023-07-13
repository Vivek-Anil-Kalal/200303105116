import express from "express";
import { getAllTrain } from "../controllers/trains.js";

const router = express.Router();

router.post("/trains", getAllTrain);

export default router;
