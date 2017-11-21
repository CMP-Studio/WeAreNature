
export enum HTTPStatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  InternalServerError = 500,
}

export interface IResponsePayload {
  statusCode: HTTPStatusCodes,
  body?: string,
}

export interface IEventPayload {
  method: string,
  body: any,
  headers: any,
}

export interface ICallback {
  (error: any, response: IResponsePayload): void,
}
