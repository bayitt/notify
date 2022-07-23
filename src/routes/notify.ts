import { Router } from "express";
import { body } from "express-validator";
import { notify } from "../actions";
import { verifyRequestMiddleware } from "../middleware";

export const notifyRouter = Router();

notifyRouter.post(
  "/",
  body("service", "service is required").exists(),
  body("step", "step is required").exists(),
  verifyRequestMiddleware,
  notify
);
