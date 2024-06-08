import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class UnavilableForLegalReasonsException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.LegallyUnavilableError, status ? status : 451)
  }
}
