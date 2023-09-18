import { prisma } from "@/config";
import { users } from "@prisma/client";

async function create(data: UserCreate) {
  return prisma.users.create({
    data,
  });
}

export type UserCreate = Omit<users, "id">;
export const userRepository = { create };
