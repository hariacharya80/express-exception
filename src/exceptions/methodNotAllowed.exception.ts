import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class MethodNotAllowedException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.MethodNotAllowedError, status ? status : 405)
  }
}
