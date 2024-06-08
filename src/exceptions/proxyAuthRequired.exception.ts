import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class ProxyAuthenticationRequiredException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.ProxyAuthenticationError, status ? status : 407)
  }
}
