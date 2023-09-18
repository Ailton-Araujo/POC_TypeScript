import { AppErrors } from "@/utils";

export function conflictError(message: string): AppErrors {
  return {
    name: "conflict",
    message,
  };
}
