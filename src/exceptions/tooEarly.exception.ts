import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class TooEarlyException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.TooEarlyError, status ? status : 425)
  }
}
