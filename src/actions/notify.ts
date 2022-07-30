import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { Mail } from "../channels";

type TStatusTextFunc = (service: string) => string;

export const statuses: { [key: string]: (string | TStatusTextFunc)[] } = {
  build_start: [
    "Build Started",
    (service: string) => `The ${service} build has started.`,
  ],
  build_completed: [
    "Build Completed",
    (service: string) => `The ${service} build is done.`,
  ],
  image_pushed: [
    "Image Pushed",
    (service: string) =>
      `The just built image for ${service} has been successfully pushed to Dockerhub.`,
  ],
  deployed: [
    "Application deployed",
    (service: string) => `${service} has been deployed successfully.`,
  ],
  failed: [
    "Pipeline Failed",
    (service: string) => `The build pipeline for ${service} has failed.`,
  ],
};

export const notify = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { service, step } = req.body;

  const params = statuses[step.toLowerCase()];
  const subject = `${service} - ${params[0]}`;
  const text = (params[1] as TStatusTextFunc)(service);

  const mail = new Mail();
  await mail.send(subject, text);

  res.status(200).json({ message: "Notification sent successfully" });
};
