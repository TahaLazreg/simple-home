const {Model, DataTypes} = require('sequelize');
import sequelize from '../sql';
import Calendar from './calendar'

//---------- User definition ----------//
class User extends Model {}
User.init({
  username: DataTypes.STRING,
  password: DataTypes.STRING
}, { sequelize, modelName: 'user' });

User.hasOne(Calendar);

//---------- User functions ----------//

