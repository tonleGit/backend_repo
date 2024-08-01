import { Request, Response, NextFunction } from "express";
import ApiError from "../entities/ApiError";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (token) {
    // Validate token here
    next();
  } else {
    res.status(401).send(new ApiError(401, "Unauthorized"));
  }
};

export default authMiddleware;
