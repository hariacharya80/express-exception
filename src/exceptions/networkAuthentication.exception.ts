import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class NetworkAuthenticationRequiredException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.NetworkAuthenticationRequiredError, status ? status : 511)
  }
}
