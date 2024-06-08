export enum Logger {
  DEFAULT = 'default',
  CUSTOM = 'custom'
}
export type TexceptionHandlerConfig = {
  logger?: Logger,
  logFn?: any,
  bypassUnknownExceptions?: boolean
  responseErrorKey?: string
}
