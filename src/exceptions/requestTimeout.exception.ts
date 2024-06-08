import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class RequestTimeoutException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.RequestTimeoutError, status ? status : 408)
  }
}
