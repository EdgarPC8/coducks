import { Sequelize } from "sequelize";

const sequelize = new Sequelize("gymdb", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export { sequelize };
