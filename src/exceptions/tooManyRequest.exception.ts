import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class TooManyRequestException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.TooManyRequestError, status ? status : 429)
  }
}
