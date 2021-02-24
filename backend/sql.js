import {Sequelize} from 'sequelize';
import options from './constants.js'

//creating the sequelize object
const sequelize = new Sequelize(options.database, options.username, options.password, {
  host: options.host,
  dialect: options.dialect
});

//try connection
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;