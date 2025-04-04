import { ExceptionMessage } from "../config/global.config";
import { TExceptionMessage } from "../types/exceptionMessage.types";

/**
* Configure the default messages sent to client for specific exception 
*
* @param {ExceptionKeys} exceptionName - The name of exception to change message for.
* @param {string}  exceptionMessage -New message to set for the exception.
*/
type ExceptionKeys = keyof TExceptionMessage;
export function setExceptionMessage(exception: ExceptionKeys, message: string) {
  ExceptionMessage[exception] = message;
  return ExceptionMessage;
}

