import "express-async-errors";
import express, { json, Express } from "express";
import cors from "cors";
import { userRouter, gamesRouter, userGamesRouter } from "@/routers";
import { errorHandler } from "@/middlewares/";
import { dbConnect, dbDisconnect } from "@/config";

const app = express();
app
  .use(cors())
  .use(json())
  .use(userRouter)
  .use(gamesRouter)
  .use(userGamesRouter)
  .use(errorHandler);

export function init(): Promise<Express> {
  dbConnect();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await dbDisconnect();
}

const port = process.env.PORT || 5000;

init().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
  });
});
