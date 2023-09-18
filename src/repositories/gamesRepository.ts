import { prisma } from "@/config";
import { Prisma } from "@prisma/client";

function getGameByName(name: string) {
  return prisma.games.findFirst({
    where: {
      name: {
        equals: name,
        mode: "insensitive",
      },
    },
  });
}

function create(data: Prisma.gamesCreateManyInput) {
  return prisma.games.create({ data });
}

async function read() {
  const gamesList = await prisma.games.findMany({
    include: {
      publisher: { select: { name: true } },
      reviews: {
        select: {
          review: true,
          user: { select: { id: true, name: true } },
        },
      },
      ratings: { select: { rating: true } },
    },
  });
  return gamesList;
}

export type GamesCreate = {
  name: string;
  launchDate: Date;
  publisher: string;
};

export const gameRepository = { getGameByName, create, read };
