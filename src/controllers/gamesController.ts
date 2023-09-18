import httpStatus from "http-status";
import { Request, Response } from "express";
import { gamesService } from "@/services";
import { GamesCreate } from "@/repositories";

async function createGame(req: Request, res: Response) {
  const data = req.body as GamesCreate;
  const result = await gamesService.create(data);
  res.status(httpStatus.CREATED).send(result);
}

async function getAllGames(req: Request, res: Response) {
  const result = await gamesService.read();
  res.status(httpStatus.OK).send(result);
}

export const gamesController = { createGame, getAllGames };
