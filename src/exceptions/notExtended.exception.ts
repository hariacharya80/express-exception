import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class NotExtendedException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.NotExtendedError, status ? status : 510)
  }
}
