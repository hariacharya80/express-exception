import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class UriTooLongException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.UriTooLongError, status ? status : 414)
  }
}
