import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class ContentLengthRequiredException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.LengthRequiredError, status ? status : 411)
  }
}
