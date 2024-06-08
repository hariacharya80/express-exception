import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class GatewayTimeoutException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.GatewayTimeoutError, status ? status : 504)
  }
}
