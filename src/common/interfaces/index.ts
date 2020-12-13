export type JWTPayload = string | Record<string, unknown> | Buffer;

export interface IUser {
  [k: string]: string;

  name: string;
  email: string;
}
