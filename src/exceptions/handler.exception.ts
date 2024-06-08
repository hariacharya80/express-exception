import { Request, Response, NextFunction } from "express";
import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export async function handleExceptions(error: unknown, _req: Request, res: Response, next: NextFunction) {
  if (!error) {
    return next()
  }
  console.error(error)
  if (error instanceof HttpException) {
    return res.status(error.status).json({ message: error.message })
  }
  return res.status(500).json({ message: ExceptionMessage.InternalServerError })
}
