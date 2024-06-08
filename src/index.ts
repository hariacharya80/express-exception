import { setHandler } from "./utils/setHandler.util";
import CustomHttpException from "./exceptions/http.exception";
import BadRequestException from './exceptions/badrequest.exception'
import UnauthorizedException from './exceptions/badrequest.exception'
import PaymentRequiredException from "./exceptions/paymentRequired.exception";
import NotFoundException from "./exceptions/notFound.exception";
import ForbiddenException from './exceptions/forbidden.exception'
import MethodNotAllowedException from "./exceptions/methodNotAllowed.exception";
import ConflictException from './exceptions/conflict.exception'
import InternalServerErrorException from "./exceptions/internalServerError.exception";
import TeaPotException from "./exceptions/teapot.exception";
import NotAcceptableException from "exceptions/notAcceptable.exception";
import ProxyAuthenticationRequiredException from "exceptions/proxyAuthRequired.exception";
import RequestTimeoutException from "exceptions/requestTimeout.exception";
import GoneException from "exceptions/gone.exception";
import ContentLengthRequiredException from "exceptions/length.exception";
import PreconditionRequiredException from "exceptions/preconditionRequired.exception";
import PreconditionFailedException from "exceptions/precondition.exception";
import PayloadTooLargeException from "exceptions/payloadLarge.exception";
import UriTooLongException from "exceptions/uriTooLong.exception";
import UnsupportedMediaException from "exceptions/unsupportedMedia.exception";
import RangeTooLongException from "exceptions/rangeTooLong.exception";
import ExpectationFailedException from "exceptions/expectationFailed.exception";
import MisdirectedException from "exceptions/misdirected.exception";
import UnprocessableException from "exceptions/unprocessable.exception";
import LockedException from "exceptions/locked.exception";
import FailedDependencyException from "exceptions/failedDepencency.exception";
import TooEarlyException from "exceptions/tooEarly.exception";
import UpgradeRequiredException from "exceptions/upgradeRequired.exception";
import TooManyRequestException from "exceptions/tooManyRequest.exception";
import NotImplementedException from "exceptions/notImplemented.exception";
import RequestHeaderTooLargeException from "exceptions/headerTooLarge.exception";
import UnavilableForLegalReasonsException from "exceptions/legalReasons.exception";
import BadGatewayException from "exceptions/badGateway.exception";
import GatewayTimeoutException from "exceptions/gatewayTimeout.exception";
import HttpVersionNotSupportedException from "exceptions/httpVersionNotSupported.exception";
import VarientAlsoNegotiatesException from "exceptions/varientNegotation.exception";
import InsufficentStorageException from "exceptions/insufficentStorage.exception";
import LoopDetectedException from "exceptions/loopDetected.exception";

export {
  setHandler,
  BadGatewayException,
  LoopDetectedException,
  InsufficentStorageException,
  VarientAlsoNegotiatesException,
  HttpVersionNotSupportedException,
  GatewayTimeoutException,
  UnavilableForLegalReasonsException,
  RequestHeaderTooLargeException,
  NotImplementedException,
  TooManyRequestException,
  UpgradeRequiredException,
  TooEarlyException,
  FailedDependencyException,
  CustomHttpException,
  BadRequestException,
  UnauthorizedException,
  PaymentRequiredException,
  ForbiddenException,
  NotFoundException,
  MethodNotAllowedException,
  ConflictException,
  TeaPotException,
  NotAcceptableException,
  LockedException,
  ProxyAuthenticationRequiredException,
  RequestTimeoutException,
  GoneException,
  ContentLengthRequiredException,
  PreconditionRequiredException,
  PreconditionFailedException,
  InternalServerErrorException,
  PayloadTooLargeException,
  UriTooLongException,
  ExpectationFailedException,
  UnsupportedMediaException,
  RangeTooLongException,
  MisdirectedException,
  UnprocessableException
}
