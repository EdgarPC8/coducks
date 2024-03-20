import jwt from "jsonwebtoken";
import { JWT_KEY } from "../config.js";

function verifyJwt(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_KEY, (err, decode) => {
      if (err) reject(err);
      resolve(decode);
    });
  });
}

function getTokenFromHeader(req) {
  return new Promise((resolve, reject) => {
    req.headers["authorization"]
      ? resolve(req.headers["authorization"].split(" ")[1])
      : reject("No token");
  });
}

export { verifyJwt, getTokenFromHeader };
