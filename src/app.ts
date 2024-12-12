import express from "express";
import { notifyRouter, pingRouter } from "./routes";
import { bootstrap, loadEnv } from "./utilities";
import { Request, Response, NextFunction } from "express";

// Loading up relevant environment variables
loadEnv();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/ping", pingRouter);
app.use("/", notifyRouter);

bootstrap(app);
