const {Model, DataTypes} = require('sequelize');
import sequelize from '../sql';

class Calendar extends Model {}
Calendar.init({
  username: DataTypes.STRING,
  password: DataTypes.STRING
}, { sequelize, modelName: 'calendar' });

export default Calendar;