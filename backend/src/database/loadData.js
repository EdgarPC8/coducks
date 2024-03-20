import { Roles } from "../Models/Roles.js";
import { Users } from "../Models/Users.js";
import jsonData from "./data/backup.json" assert { type: "json" };

const loadDataToDb = async () => {
  try {
    await Roles.bulkCreate(jsonData.roles);
    await Users.bulkCreate(jsonData.users);
  } catch (error) {
    console.log("Error al inserta los registros:", error.message);
  }
};

export { loadDataToDb };
