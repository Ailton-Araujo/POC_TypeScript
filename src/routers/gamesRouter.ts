import { gamesController } from "@/controllers";
import { Router } from "express";
import { validateBody } from "@/middlewares";
import { gameSchema } from "@/schemas";

const gamesRouter = Router();

gamesRouter.post(
  "/games",
  validateBody(gameSchema),
  gamesController.createGame
);
gamesRouter.get("/games", gamesController.getAllGames);
export { gamesRouter };
