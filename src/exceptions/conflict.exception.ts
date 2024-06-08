import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class ConflictException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.ForbiddenError, status ? status : 409)
  }
}
