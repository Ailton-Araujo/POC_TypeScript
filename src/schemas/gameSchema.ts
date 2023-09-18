import joiBase from "joi";
import joiDate from "@joi/date";
import { GamesCreate } from "@/repositories";

const joi = joiBase.extend(joiDate);

export const gameSchema = joi.object({
  name: joi.string().max(50).required(),
  launchDate: joi.date().format("YYYY/MM/DD").required(),
  publisher: joi.string().max(50).required(),
});
