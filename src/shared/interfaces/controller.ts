export interface IResponse<Request = unknown, Response = unknown> {
  perform(request: Request): Promise<Response>;
}
