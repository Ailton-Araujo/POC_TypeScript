import { gameRepository } from "@/repositories";
import { GamesCreate } from "@/repositories";
import { conflictError } from "@/errors";
import { publisherService } from "./publisherService";

async function create(data: GamesCreate) {
  const game = await gameRepository.getGameByName(data.name);
  if (game) {
    throw conflictError("This game is already registered");
  }
  const publisherId = await publisherService.getCreatePublisher({
    name: data.publisher,
  });

  const formatData = {
    name: data.name,
    launchDate: new Date(data.launchDate),
    publisherId,
  };
  await gameRepository.create(formatData);
  return;
}

async function read() {
  const gamesList = await gameRepository.read();
  const result = gamesList.map((game) => {
    const { ratings, ...data } = game;
    let sumRatings = 0;
    ratings.forEach((e) => {
      if (e.rating) sumRatings += e.rating;
    });
    const avgRating = (
      sumRatings / (ratings.length > 0 ? ratings.length : 1)
    ).toFixed(2);
    return { ...data, avgRating };
  });
  return result;
}

export const gamesService = { create, read };
