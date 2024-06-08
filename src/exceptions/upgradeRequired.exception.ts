import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class UpgradeRequiredException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.UpgradeRequiredError, status ? status : 426)
  }
}
