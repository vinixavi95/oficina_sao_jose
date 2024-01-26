import express from "express";
import { getUser } from "../controller/userController";

const router = express.Router();

router.get("/:id", getUser);

export default router;