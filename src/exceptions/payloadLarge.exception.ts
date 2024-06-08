
import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class PayloadTooLargeException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.PayloadTooLargeError, status ? status : 413)
  }
}
