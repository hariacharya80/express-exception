import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class ForbiddenException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.ForbiddenError, status ? status : 403)
  }
}
