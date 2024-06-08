import { ExceptionMessage } from "../config/global.config"
import HttpException from "./http.exception"

export default class BadRequestException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.BadRequestError, status ? status : 400)
  }
}
