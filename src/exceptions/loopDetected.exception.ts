import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class LoopDetectedException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.LoopDetectedError, status ? status : 508)
  }
}
