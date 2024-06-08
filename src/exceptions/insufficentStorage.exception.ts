import { ExceptionMessage } from "../config/global.config";
import HttpException from "./http.exception";

export default class InsufficentStorageException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ? message : ExceptionMessage.InsufficentStorageError, status ? status : 507)
  }
}
