import { getTokenFromHeader, verifyJwt } from "../libs/jwt.js";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = await getTokenFromHeader(req);
    const verify = await verifyJwt(token);
    next();
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: error });
  }
};

export { isAuthenticated };
