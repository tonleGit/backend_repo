import { Router } from "express";
import UsersRouter from "../routes/userRoutes";

const apiRouter = Router();

apiRouter.use("/users", UsersRouter);

export default apiRouter;
