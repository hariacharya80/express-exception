import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class InternalServerErrorException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.InternalServerError, status ? status : 500)
  }
}
