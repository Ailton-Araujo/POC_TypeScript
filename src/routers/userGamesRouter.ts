import { userGamesController } from "@/controllers";
import { Router } from "express";
import { validateBody } from "@/middlewares";
import {
  userGamesSchema,
  ratingAndReviewSchema,
  deleteRatingAndReviewSchema,
  deleteUserGamesSchema,
} from "@/schemas";

const userGamesRouter = Router();

userGamesRouter.post(
  "/usergames/:userId",
  validateBody(userGamesSchema),
  userGamesController.create
);

userGamesRouter.get("/usergames/:userId/", userGamesController.read);

userGamesRouter.post(
  "/usergames/reviews/:userId",
  validateBody(ratingAndReviewSchema),
  userGamesController.upsertUserGameRatingAndReview
);

userGamesRouter.delete(
  "/usergames/reviews/:userId",
  validateBody(deleteRatingAndReviewSchema),
  userGamesController.deleteUserGameRatingAndReview
);

userGamesRouter.delete(
  "/usergames/:userId",
  validateBody(deleteUserGamesSchema),
  userGamesController.deleteUserGames
);

export { userGamesRouter };
