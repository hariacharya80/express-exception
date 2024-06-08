import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class VarientAlsoNegotiatesException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.VariantNegotiateError, status ? status : 506)
  }
}
