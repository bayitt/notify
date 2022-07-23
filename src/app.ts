import express from "express";
import { verifyRequestMiddleware } from "./middleware";
import { bootstrap, loadEnv } from "./utilities";

// Loading up relevant environment variables
loadEnv();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(verifyRequestMiddleware);

bootstrap(app);
