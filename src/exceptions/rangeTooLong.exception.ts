import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class RangeTooLongException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.RangeTooLongError, status ? status : 416)
  }
}
