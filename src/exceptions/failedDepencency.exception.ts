import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class FailedDependencyException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.FailedDependencyError, status ? status : 424)
  }
}
