import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class UnsupportedMediaException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.UnsupportedMediaError, status ? status : 415)
  }
}
