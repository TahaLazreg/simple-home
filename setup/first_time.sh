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
node /helper/database.js