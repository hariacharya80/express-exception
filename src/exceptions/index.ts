import CustomHttpException from './http.exception'
import BadRequestException from './badrequest.exception'
import UnauthorizedException from './unauthorized.exception'
import PaymentRequiredException from './paymentRequired.exception'
import ForbiddenException from './forbidden.exception'
import NotFoundException from './notFound.exception'
import MethodNotAllowedException from './methodNotAllowed.exception'
import InternalServerErrorException from './internalServerError.exception'
import ConflictException from './conflict.exception'
import TeaPotException from './teapot.exception'

export const exceptions = {
  CustomHttpException,
  BadRequestException,
  UnauthorizedException,
  PaymentRequiredException,
  ForbiddenException,
  NotFoundException,
  MethodNotAllowedException,
  ConflictException,
  TeaPotException,
  InternalServerErrorException
}
