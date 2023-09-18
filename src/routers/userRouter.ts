import { userController } from "@/controllers";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/user", userController.createUser);

export { userRouter };
