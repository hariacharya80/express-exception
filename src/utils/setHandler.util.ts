import { Application } from "express";
import { handleExceptions } from "../exceptions/handler.exception";

/**
 *  Set a express application to use express-exceptions handler,
 *  Must be called after all routes and middlewares
 *  and before listening for connection.
 *
 * @param {Application} app - Express application returned by express() function call.
 *
 * @returns {void}
 */
export function setHandler(app: Application): void {
  app.use(handleExceptions);
  return;
}
