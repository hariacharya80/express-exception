import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class HttpVersionNotSupportedException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.HttpVersionNotSupportedError, status ? status : 505)
  }
}
