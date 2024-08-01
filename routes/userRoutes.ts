// routes/userRoutes.ts

import { Router } from "express";
import { createNewUser } from "../repository/userCollection";
import { fetchAllUserData, updateUserData } from "../service/userServices";
import ApiError from "../entities/ApiError";

const router = Router();

// Get all users
router.get("/fetch-user-data", async (req, res) => {
  try {
    const userList = await fetchAllUserData();
    res.status(200).json(userList);
  } catch (error: any) {
    res.status(500).json(new ApiError(500, error.message));
  }
});

// Update user
router.post("/update-user-data", async (req, res) => {
  try {
    const docRef = await updateUserData(req.body);
    res.status(201).json({ id: docRef.data() });
  } catch (error: any) {
    res.status(500).json(new ApiError(500, error.message));
  }
});

// Create user
router.post("/create-new-user", async (req, res) => {
  try {
    const docRef = await createNewUser(req.body);
    res.status(201).json({ id: docRef.id });
  } catch (error: any) {
    res.status(500).json(new ApiError(500, error.message));
  }
});

export default router;
