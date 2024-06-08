import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class UnauthorizedException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.UnauthorizedError, status ? status : 401)
  }
}
