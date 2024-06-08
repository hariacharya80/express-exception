import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class ServiceUnavilableException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.ServiceUnavilableError, status ? status : 503)
  }
}
