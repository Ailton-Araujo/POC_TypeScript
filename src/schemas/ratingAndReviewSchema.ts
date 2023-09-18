import Joi from "joi";
import { BodyRatingAndReview } from "@/repositories";

export const ratingAndReviewSchema = Joi.object<BodyRatingAndReview>({
  gameId: Joi.number().integer().required(),
  userGamesId: Joi.number().integer().required(),
  rating: Joi.number().integer().min(1).max(5),
  review: Joi.string().max(255),
});

export const deleteRatingAndReviewSchema = Joi.object<BodyRatingAndReview>({
  gameId: Joi.number().integer().required(),
  userGamesId: Joi.number().integer().required(),
  deleteRating: Joi.boolean(),
  deleteReview: Joi.boolean(),
});
