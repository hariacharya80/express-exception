import { Application } from "express";
import { handleExceptions } from "./handler.util";
import { TexceptionHandlerConfig } from "types/exceptionHandler.types";

/**
 *  Set a express application to use express-exceptions handler,
 *  Must be called after all routes and middlewares
 *  and before listening for connection.
 *
 * @param {Application} app - Express application instance returned by express() function call.
 *
 * @returns {void}
 */

export const handlerConfig: TexceptionHandlerConfig = {
  logFn: null,
  bypassUnknownExceptions: false,
  responseErrorKey: 'message'
}

export function setHandler(app: Application, config?: TexceptionHandlerConfig): void {
  if (!app) {
    throw new Error('Please provide express application to handle exceptions for');
  }

  app.use(handleExceptions);

  if (!config) return;
  if (config.logFn && typeof config.logFn !== "function") {
    throw new Error('Error: Logger function must be callable');
  }

  if (config.logFn) {
    handlerConfig.logFn = config.logFn;
  }

  if (config.bypassUnknownExceptions) {
    console.warn(`Warning: bypassUnknownExceptions option is explictly set to true, make sure that your application handles exceptions that are not from this package.`)
  }

  if (config.responseErrorKey) {
    handlerConfig.responseErrorKey = config.responseErrorKey
  }

  return;
}

export default setHandler;
