import { sequelize } from "../database/conection.js";
import { DataTypes } from "sequelize";
import { Roles } from "./Roles.js";
import { UserRoles } from "./UserRoles.js";

// insert into users (firstName, lastName, password, username) values ('Patricio', 'briceño', '$2b$10$p49gCto6b2liCqoQoSMDyu8/EmT1t3cwJe6HALeZNgXxZHx7rJMRu ', 'crawcliffe0');

const Users = sequelize.define(
  "user",
  {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING(30),
    },
    lastName: {
      type: DataTypes.STRING(30),
    },
    username: {
      type: DataTypes.STRING(30),
    },
    password: {
      type: DataTypes.STRING(100),
    },
  },
  {
    timestamps: false,
  }
);

Users.belongsToMany(Roles, {
  through: UserRoles,
  foreignKey: "userId",
  sourceKey: "userId",
});
Roles.belongsToMany(Users, {
  through: UserRoles,
  foreignKey: "roleId",
  sourceKey: "id",
});

export { Users };
