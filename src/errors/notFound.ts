import { AppErrors } from "@/utils";

export function notFoundError(message: string): AppErrors {
  return {
    name: "notFound",
    message,
  };
}
