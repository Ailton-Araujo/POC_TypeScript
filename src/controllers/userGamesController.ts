import httpStatus from "http-status";
import { Request, Response } from "express";
import { userGamesService } from "@/services";
import { UserGameCreateDelete, BodyRatingAndReview } from "@/repositories";

async function create(req: Request, res: Response) {
  const userId = Number(req.params.userId);
  const data = req.body as UserGameCreateDelete;
  const result = await userGamesService.create({ userId, ...data });
  return res.status(httpStatus.CREATED).send(result);
}

async function read(req: Request, res: Response) {
  const userId = Number(req.params.userId);
  const result = await userGamesService.read(userId);
  return res.status(httpStatus.OK).send(result);
}

async function upsertUserGameRatingAndReview(req: Request, res: Response) {
  const userId = Number(req.params.userId);
  const data = req.body as BodyRatingAndReview;
  const result = await userGamesService.upsertUserGameRatingAndReview({
    userId,
    ...data,
  });
  return res.status(httpStatus.CREATED).send(result);
}

async function deleteUserGameRatingAndReview(req: Request, res: Response) {
  const userId = Number(req.params.userId);
  const data = req.body as BodyRatingAndReview;
  const result = await userGamesService.deleteUserGameRatingAndReview({
    userId,
    ...data,
  });
  return res.status(httpStatus.NO_CONTENT).send(result);
}

async function deleteUserGames(req: Request, res: Response) {
  const userId = Number(req.params.userId);
  const data = req.body as UserGameCreateDelete;

  const result = await userGamesService.deleteUserGames({ userId, ...data });

  return res.status(httpStatus.NO_CONTENT).send(result);
}

export const userGamesController = {
  create,
  read,
  upsertUserGameRatingAndReview,
  deleteUserGameRatingAndReview,
  deleteUserGames,
};
