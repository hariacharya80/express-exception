export default class CustomHttpException extends Error {
  message: string
  status: number
  constructor(message?: string, status?: number) {
    super()
    this.message = message ?? 'Error'
    this.status = status ?? 500
  }
}
