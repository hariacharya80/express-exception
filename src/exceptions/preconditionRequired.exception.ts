import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class PreconditionRequiredException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.PreconditionRequiredError, status ? status : 428)
  }
}
