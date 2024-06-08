import { Application } from "express";
import { handleExceptions } from "./handler.util";
import { Logger, TexceptionHandlerConfig } from "types/exceptionHandler.types";

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
  logger: Logger.DEFAULT, // kept logger option,  TODO: implement some production grade logger to support this package automatically
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

  if (config.logger !== Logger.DEFAULT && !config.logFn) {
    throw new Error('Custom Logger needs a logger function!')
  }

  if (config.logFn && (!config.logger || config.logger !== Logger.CUSTOM)) {
    console.warn('Warning: logger function will not be used since default logger is enabled!')
  }

  if (config.logFn && config.logger == Logger.CUSTOM) {
    handlerConfig.logger = Logger.CUSTOM;
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
