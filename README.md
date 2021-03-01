# simple-home
We make stuff to make life in ur house ez

# For developers to make this run:
1. Create the 'private_constants.js' file in the /backend/constants directory.
2. Copy the following code inside:
  ```
//========== MARIADB CONNECTION PARAMETERS ==========//

const sql_options = { // TODO: change this
    database: '',
    username: '', 
    password: '',
    host: 'localhost',
    dialect: 'mariadb'
  }

  //========== EXPORTS ==========//

  export default sql_options;
  ```
