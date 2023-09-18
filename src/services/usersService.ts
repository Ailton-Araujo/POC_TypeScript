import { userRepository } from "@/repositories";
import { User } from "@/utils";

function create(data: User) {
  return userRepository.create(data);
}

export const userService = { create };
