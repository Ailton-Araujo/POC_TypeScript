import { prisma } from "@/config";
import { publishers } from "@prisma/client";

function create(data: CreatePublisher) {
  return prisma.publishers.create({ data });
}

function getPublisherByName(name: string) {
  return prisma.publishers.findMany({
    where: {
      name: {
        equals: name,
        mode: "insensitive",
      },
    },
  });
}

export type CreatePublisher = Omit<publishers, "id">;

export const publishersRepository = { create, getPublisherByName };
