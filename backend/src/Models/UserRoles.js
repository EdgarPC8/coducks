import { sequelize } from "../database/conection.js";

const UserRoles = sequelize.define("user_roles", {}, { timestamps: false });

export { UserRoles };
