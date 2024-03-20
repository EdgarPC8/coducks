import { sequelize } from "../database/conection.js";
import { DataTypes } from "sequelize";

const Roles = sequelize.define(
  "roles",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rol: {
      type: DataTypes.STRING(30),
    },
  },
  {
    timestamps: false,
  }
);

export { Roles };
