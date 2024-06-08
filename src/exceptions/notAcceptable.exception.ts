import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class NotAcceptableException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.NotAcceptableError, status ? status : 406)
  }
}
