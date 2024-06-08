import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class RequestHeaderTooLargeException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.RequestHeaderTooLargeError, status ? status : 431)
  }
}

