import express from "express";
import {
  registerUser,
  authenticateUser,
  logoutUser,
} from "../controller/authController";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", authenticateUser);
router.post("/logout", logoutUser);

export default router;