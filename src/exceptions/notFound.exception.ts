import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class NotFoundException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.NotFoundError, status ? status : 404)
  }
}
