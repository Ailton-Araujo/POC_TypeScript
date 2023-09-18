import { AppErrors } from "@/utils";
import { Response, Request, NextFunction } from "express";
import httpStatus from "http-status";

export function errorHandler(
  error: AppErrors,
  _req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(error);

  if (error.code === "P2002")
    return res
      .status(httpStatus.CONFLICT)
      .send(`${error?.meta?.target} is already registered`);

  if (error.code === "P2003")
    return res
      .status(httpStatus.NOT_FOUND)
      .send(`User or Game is not registered`);

  if (error.code === "P2025")
    return res.status(httpStatus.NOT_FOUND).send(`${error?.meta?.cause} `);

  switch (error.name) {
    case "conflict":
      return res.status(httpStatus.CONFLICT).send(error.message);
    case "notFound":
      return res.status(httpStatus.NOT_FOUND).send(error.message);
    case "unprocessable":
      return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
    case "internal":
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
    default:
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}
