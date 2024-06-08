import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class MisdirectedException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.MisdirectedError, status ? status : 421)
  }
}
