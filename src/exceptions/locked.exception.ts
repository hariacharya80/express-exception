import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class LockedException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.LockedError, status ? status : 423)
  }
}

