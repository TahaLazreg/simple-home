import {Sequelize} from 'sequelize';
import sql_options from './constants/private_constants.js'

//========== CREATING THE SEQUELIZE OBJECT ==========//
const sequelize = new Sequelize(sql_options.database, sql_options.username, sql_options.password, {
  host: sql_options.host,
  dialect: sql_options.dialect,
});


//========== CLASS DEFINITIONS ==========//

//---------- Planner definition ----------//
class Planner extends Sequelize.Model {}
Planner.init({
  username: Sequelize.DataTypes.STRING,
  password: Sequelize.DataTypes.STRING
}, { sequelize, modelName: 'planner' });

//---------- User definition ----------//

class User extends Sequelize.Model {}
User.init({
  username: Sequelize.DataTypes.STRING,
  password: Sequelize.DataTypes.STRING
}, { sequelize, modelName: 'user' });

User.hasOne(Planner);


//========== EXPORTS ==========//

export default {sequelize, User, Planner};