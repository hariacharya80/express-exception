import { ExceptionMessage } from "../config/global.config";
type ExceptionKeys = keyof typeof ExceptionMessage;
export function configureMessage(messagesToUpdate: Partial<Record<ExceptionKeys, string>>) {
  const updatedMessages = { ...ExceptionMessage };

  for (const key in messagesToUpdate) {
    if (Object.prototype.hasOwnProperty.call(messagesToUpdate, key)) {
      if (ExceptionMessage.hasOwnProperty(key)) {
        updatedMessages[key] = messagesToUpdate[key];
      } else {
        console.warn(`Message for '${key}' does not exist in the original constant.`);
      }
    }
  }

  return updatedMessages;
}

