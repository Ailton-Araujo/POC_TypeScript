import {
  userGamesRepository,
  UserGameCreateDelete,
  RatingAndReview,
} from "@/repositories";
import { conflictError, notFoundError } from "@/errors";

async function create(data: UserGameCreateDelete) {
  return await userGamesRepository.create(data);
}

async function read(data: number) {
  const result = await userGamesRepository.read(data);
  if (result.length === 0)
    throw notFoundError("User has no games in their Personal Collection");
  return result;
}

async function upsertUserGameRatingAndReview(data: RatingAndReview) {
  const userGame = await userGamesRepository.getGameByUserIdAndGameId(data);
  if (!userGame)
    throw notFoundError(
      "User does not have this game on their personal collection"
    );
  let rating: RatingAndReview;
  let review: RatingAndReview;
  if (data.rating) rating = await userGamesRepository.upsertRating(data);
  if (data.review) review = await userGamesRepository.upsertReview(data);
  return { rating, review };
}

async function deleteUserGameRatingAndReview(data: RatingAndReview) {
  if (data.deleteRating) await userGamesRepository.deleteRating(data);
  if (data.deleteReview) await userGamesRepository.deleteReview(data);
  return;
}

async function deleteUserGames(data: UserGameCreateDelete) {
  return await userGamesRepository.deleteUserGames(data);
}

export const userGamesService = {
  create,
  read,
  upsertUserGameRatingAndReview,
  deleteUserGameRatingAndReview,
  deleteUserGames,
};
