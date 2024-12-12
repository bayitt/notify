import { Request, Response, NextFunction } from "express";
import { Mail } from "../channels";

export const ping = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const mail = new Mail();
    await mail.send(
      "This is a test ping email",
      "This is a test ping email status",
      true
    );
    res.status(200).json({ email: "healthy" });
  } catch (error) {
    res.status(400).json({ email: "unhealthy" });
  }
};
