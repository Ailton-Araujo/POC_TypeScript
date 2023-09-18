import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";
import { unprocessableError } from "@/errors";

export function validateBody(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      let errorMessage = "";
      error.details.forEach(
        (e, index) =>
          (errorMessage += (index > 0 ? "and " : "") + e.message + " ")
      );
      throw unprocessableError(errorMessage);
    }
    next();
  };
}
