export class KoreanbotsAPIError extends Error {
  constructor(message?: string) {
    super(message)
    this.name = 'KoreanbotsAPIError'
  }
}
