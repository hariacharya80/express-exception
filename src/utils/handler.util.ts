import { Request, Response, NextFunction } from "express";
import { ExceptionMessage } from "../config/global.config";
import HttpException from "../exceptions/http.exception";
import { handlerConfig } from "./setHandler.util";
import { Logger } from "types/exceptionHandler.types";

export async function handleExceptions(error: unknown, _req: Request, res: Response, next: NextFunction) {
  try {

    if (!error) {
      return next()
    }

    if (handlerConfig.logger === Logger.DEFAULT) {
      console.error(error)
    }

    if (error instanceof HttpException) {
      return res.status(error.status).json({ [`${handlerConfig.responseErrorKey}`]: error.message })
    }

    if (handlerConfig.bypassUnknownExceptions) {
      return next(error);
    }

    return res.status(500).json({ [`${handlerConfig.responseErrorKey}`]: ExceptionMessage.InternalServerError })
  } catch (error) {
    //INFO: If for some mysterious reason, the above functions failed. We return an generic error to prevent downtime.
    console.warn('Fatal: Exception Handler Encountered An Issue While Handling Exceptions!')
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}
