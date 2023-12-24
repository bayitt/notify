import express from "express";
import { notifyRouter } from "./routes";
import { bootstrap, loadEnv } from "./utilities";
import { Request, Response, NextFunction } from "express";

// Loading up relevant environment variables
loadEnv();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/ping", (_: Request, response: Response, __: NextFunction) => {
  return response.status(200).json({ status: "ok" });
});
app.use("/", notifyRouter);

bootstrap(app);
