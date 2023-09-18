import { prisma } from "@/config";
import { Prisma } from "@prisma/client";

function create(data: UserGameCreateDelete) {
  return prisma.userGames.create({ data });
}

function read(data: number) {
  return prisma.userGames.findMany({
    where: {
      userId: data,
    },
    include: {
      game: { include: { publisher: { select: { name: true } } } },
      user: { select: { name: true } },
      review: { select: { review: true } },
      ratings: { select: { rating: true } },
    },
  });
}

function getGameByUserIdAndGameId(data: RatingAndReview) {
  const { userGamesId, userId, gameId } = data;
  return prisma.userGames.findUnique({
    where: {
      id: userGamesId,
      userGames_userId_gameId: {
        userId: userId,
        gameId: gameId,
      },
    },
  });
}

function upsertRating(data: RatingAndReview) {
  const { userId, gameId, userGamesId, rating } = data;
  return prisma.ratings.upsert({
    where: {
      ratings_userId_gameId_userGamesId: {
        userId: userId,
        gameId: gameId,
        userGamesId: userGamesId,
      },
    },
    update: {
      rating: rating,
    },
    create: {
      userId: userId,
      gameId: gameId,
      userGamesId: userGamesId,
      rating: rating,
    },
  });
}

function deleteRating(data: RatingAndReview) {
  const { userId, gameId, userGamesId } = data;
  return prisma.ratings.delete({
    where: {
      ratings_userId_gameId_userGamesId: {
        userId: userId,
        gameId: gameId,
        userGamesId: userGamesId,
      },
    },
  });
}

function upsertReview(data: RatingAndReview) {
  const { userId, gameId, userGamesId, review } = data;
  return prisma.reviews.upsert({
    where: {
      reviews_userId_gameId_userGamesId: {
        userId: userId,
        gameId: gameId,
        userGamesId: userGamesId,
      },
    },
    update: {
      review: review,
    },
    create: {
      userId: userId,
      gameId: gameId,
      userGamesId: userGamesId,
      review: review,
    },
  });
}

function deleteReview(data: RatingAndReview) {
  const { userId, gameId, userGamesId } = data;
  return prisma.reviews.delete({
    where: {
      reviews_userId_gameId_userGamesId: {
        userId: userId,
        gameId: gameId,
        userGamesId: userGamesId,
      },
    },
  });
}

function deleteUserGames(data: UserGameCreateDelete) {
  const { userId, gameId } = data;
  return prisma.userGames.delete({
    where: {
      userGames_userId_gameId: {
        userId: userId,
        gameId: gameId,
      },
    },
  });
}

export type UserGameCreateDelete = Prisma.userGamesUncheckedCreateInput;
export type UserGameBody = Omit<UserGameCreateDelete, "userId">;

export type RatingAndReview = {
  userId: number;
  gameId: number;
  userGamesId: number;
  rating?: number;
  review?: string;
  deleteRating?: boolean;
  deleteReview?: boolean;
};

export type BodyRatingAndReview = Omit<RatingAndReview, "userId">;

export const userGamesRepository = {
  create,
  read,
  getGameByUserIdAndGameId,
  upsertRating,
  upsertReview,
  deleteRating,
  deleteReview,
  deleteUserGames,
};
