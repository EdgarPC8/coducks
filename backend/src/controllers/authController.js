import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Users } from "../Models/Users.js";
import { JWT_KEY } from "../config.js";
import { getTokenFromHeader, verifyJwt } from "../libs/jwt.js";

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Users.findOne({ where: { username } });

    if (!user) {
      return res.status(400).json({ message: "Datos incorrectos" });
    }

    const isCorrectPass = await bcrypt.compare(password, user.password);

    if (!isCorrectPass) {
      return res.status(400).json({ message: "Datos incorrectos" });
    }

    const payload = {
      userId: user.userId,
      username: user.username, 
    };

    const token = jwt.sign(payload, JWT_KEY, {
      algorithm: "HS256",
      expiresIn: "1d",
    });

    res.json({ message: "User auth", token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const verifyAccessToken = async (req, res) => {
  try {
    const token = await getTokenFromHeader(req);
    const decoded = await verifyJwt(token);
    res.json(decoded);
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
export { login, verifyAccessToken };
