import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class GoneException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.GoneError, status ? status : 410)
  }
}
