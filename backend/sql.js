import { Sequelize } from "sequelize";
import sql_options from "./constants/constants.js";

//========== CREATING THE SEQUELIZE OBJECT ==========//
const sequelize = new Sequelize(
  sql_options.sql_options.database,
  sql_options.sql_options.username,
  sql_options.sql_options.password,
  {
    host: sql_options.sql_options.host,
    dialect: sql_options.sql_options.dialect,
  }
);

//========== CLASS DEFINITIONS ==========//

//---------- Planner definition ----------//
class Planner extends Sequelize.Model {}
Planner.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: Sequelize.DataTypes.STRING,
    password: Sequelize.DataTypes.STRING,
  },
  { sequelize, modelName: "planner" }
);

//---------- User definition ----------//

class User extends Sequelize.Model {}
User.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: Sequelize.DataTypes.STRING,
    password: Sequelize.DataTypes.STRING,
  },
  { sequelize, modelName: "user" }
);

User.hasOne(Planner);

//========== EXPORTS ==========//

export default { sequelize, User, Planner };
