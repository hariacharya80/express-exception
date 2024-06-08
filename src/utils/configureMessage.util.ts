import { ExceptionMessage } from "../config/global.config";
import { TExceptionMessage } from "../types/exceptionMessage.types";

/**
* Configure the default messages sent to client for specific exception 
*
* @param {exception} messagesToUpdate - Change messages that needs to be updated
*/
type ExceptionKeys = keyof TExceptionMessage;
export function setExceptionMessage(exception: ExceptionKeys, message: string) {
  ExceptionMessage[exception] = message;
  return ExceptionMessage;
}

