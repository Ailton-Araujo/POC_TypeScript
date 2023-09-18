import { PrismaClient } from "@prisma/client";

export let prisma = new PrismaClient();

export function dbConnect(): void {
  if (prisma) {
    console.log("Connected to database");
    return;
  }
  console.log("Connected to database");
  prisma = new PrismaClient();
}

export async function dbDisconnect(): Promise<void> {
  await prisma?.$disconnect();
}
