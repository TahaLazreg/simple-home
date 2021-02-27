sudo apt-get update
sudo apt-get upgrade
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install mariadb-server
cd ..
npm update
cd client
npm update
npm run build
cd ..
sudo mysql_secure_installation
mysql -u root -Bse "CREATE USER 'temp'@'localhost' IDENTIFIED BY 'qwertyui';GRANT ALL PRIVILEGES ON * . * TO 'temp'@'localhost';ALTER USER 'temp'@'localhost' IDENTIFIED WITH mysql_native_password BY 'qwertyui';GRANT ALL PRIVILEGES ON * . * TO 'temp'@'localhost';FLUSH PRIVILEGES;"
cd backend/constants
node ../../setup/helper/database.js
mysql -u root -Bse "DROP USER 'temp'@'localhost';