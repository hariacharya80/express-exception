import { Request, Response, NextFunction } from "express";
import { ExceptionMessage } from "../config/global.config";
import HttpException from "../exceptions/http.exception";
import { handlerConfig } from "./setHandler.util";

export async function handleExceptions(error: unknown, _req: Request, res: Response, next: NextFunction) {
  try {

    if (!error) {
      next()
      return;
    }

    if (typeof handlerConfig.logFn !== "function") {
      console.error(error)
    } else {
      handlerConfig.logFn(error);
    }
    if (error instanceof HttpException) {
      res.status(error.status).json({ [`${handlerConfig.responseErrorKey}`]: error.message })
      return;
    }

    if (handlerConfig.bypassUnknownExceptions) {
      next(error);
      return;
    }

    res.status(500).json({ [`${handlerConfig.responseErrorKey}`]: ExceptionMessage.InternalServerError })
    return;
  } catch (error) {
    //INFO: If for some mysterious reason, the above functions failed. We return an generic error to prevent downtime.
    console.warn('Fatal: Exception Handler Encountered An Issue While Handling Exceptions!')
    res.status(500).json({ message: 'Internal Server Error' })
    return;
  }
}
