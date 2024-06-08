import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class PaymentRequiredException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.PaymentRequiredError, status ? status : 402)
  }
}
