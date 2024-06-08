import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class NotImplementedException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.NotImplementedError, status ? status : 501)
  }
}
