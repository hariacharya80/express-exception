import { configureMessage } from "./utils/configureMessage.util";
import { setHandler } from "./utils/setHandler.util";
import HttpException from './exceptions/http.exception'

const e = {
  setMessage: configureMessage,
  handler: setHandler
}

export { HttpException }
export default e;
