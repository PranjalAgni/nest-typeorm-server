import * as fs from "fs";
import * as jwt from "jsonwebtoken";
import { SignOptions, Algorithm } from "jsonwebtoken";
import * as path from "path";
import { JWTPayload } from "../interfaces";
import config from "src/config";

const getPublicKey = (): string => {
  const publicKeyPath = path.join(
    __dirname,
    "../",
    "../",
    "../",
    "encryptionkeys",
    "public.pem"
  );

  return fs.readFileSync(publicKeyPath, "utf8");
};

const getPrivateKey = (): string => {
  const privateKeyPath = path.join(
    __dirname,
    "../",
    "../",
    "../",
    "encryptionkeys",
    "private.pem"
  );

  console.log(privateKeyPath);

  return fs.readFileSync(privateKeyPath, "utf8");
};

const generateToken = (data: JWTPayload, opts: SignOptions) => {
  const privateKey = getPrivateKey();
  return jwt.sign(data, privateKey, opts);
};

export const generateAccessToken = (data: JWTPayload) => {
  const opts: SignOptions = {
    expiresIn: config.jwt.accessToken.expiresIN,
    algorithm: config.jwt.algorithm as Algorithm
  };

  const token = generateToken(data, opts);
  return token;
};

export const generateRefreshToken = (data: JWTPayload) => {
  const opts: SignOptions = {
    expiresIn: config.jwt.refreshToken.expiresIN,
    algorithm: config.jwt.algorithm as Algorithm
  };

  const token = generateToken(data, opts);
  return token;
};

export const verifyToken = (token: string) => {
  const publicKey = getPublicKey();
  return jwt.verify(token, publicKey, (err, decoded) => {
    if (err) throw err;
    return decoded;
  });
};
