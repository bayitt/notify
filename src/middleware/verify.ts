import { Request, Response, NextFunction } from "express";
import { compare } from "bcrypt";

export const verifyRequestMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.get("Authorization");
  let isAuthorized: boolean;

  if (!authHeader || authHeader.split(" ").length !== 2) isAuthorized = false;
  else {
    const key = authHeader.split(" ")[1];
    isAuthorized = await compare(key, process.env.VERIFICATION_KEY);
  }

  if (!isAuthorized) {
    res.status(401).json({ message: "You are not authorized" });
    return res.end();
  }

  next();
};
