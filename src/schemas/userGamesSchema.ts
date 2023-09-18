import Joi from "joi";
import { UserGameBody } from "@/repositories";

export const userGamesSchema = Joi.object<UserGameBody>({
  gameId: Joi.number().integer().required(),
});

export const deleteUserGamesSchema = Joi.object<UserGameBody>({
  gameId: Joi.number().integer().required(),
});
