import { Users } from "../Models/Users.js";

const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export { getUsers };
