import { Router } from "express";
import { body } from "express-validator";
import { notify, statuses } from "../actions";
import { verifyRequestMiddleware } from "../middleware";

export const notifyRouter = Router();

notifyRouter.post(
  "/",
  body("service", "service is required").exists(),
  body("step", "step is required")
    .exists()
    .custom((step: string) => {
      const steps = Object.keys(statuses);
      if (steps.includes(step.toLowerCase())) return true;
      throw new Error(`${step} is not a valid step`);
    }),
  verifyRequestMiddleware,
  notify
);
