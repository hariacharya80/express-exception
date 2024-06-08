import { Application } from "express";
import { handleExceptions } from "../exceptions/handler.exception";

export function setHandler(app: Application) {
  return app.use(handleExceptions);
}
