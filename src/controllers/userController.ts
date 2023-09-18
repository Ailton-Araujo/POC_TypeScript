import httpStatus from "http-status";
import { Request, Response } from "express";
import { userService } from "@/services";
import { User } from "@/utils";

async function createUser(req: Request, res: Response) {
  const data = req.body as User;

  const user = await userService.create(data);
  res.status(httpStatus.CREATED).send(user);
}

export const userController = { createUser };
