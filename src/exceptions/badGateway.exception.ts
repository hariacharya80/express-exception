import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class BadGatewayException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.BadGatewayError, status ? status : 502)
  }
}
