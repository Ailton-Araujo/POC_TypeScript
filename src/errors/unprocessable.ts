import { AppErrors } from "@/utils";

export function unprocessableError(message: string): AppErrors {
  return {
    name: "unprocessable",
    message,
  };
}
