import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class TeaPotException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.TeapotError, status ? status : 418)
  }
}
