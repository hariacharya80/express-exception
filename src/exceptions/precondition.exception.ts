import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class PreconditionFailedException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.PreconditionFailedError, status ? status : 412)
  }
}
