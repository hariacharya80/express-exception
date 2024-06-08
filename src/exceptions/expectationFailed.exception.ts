import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class ExpectationFailedException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.ExpectationFailedError, status ? status : 417)
  }
}
