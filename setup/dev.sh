mysql -u root -Bse "CREATE USER 'temp'@'localhost' IDENTIFIED BY 'qwertyui';"
mysql -u root -Bse "GRANT ALL PRIVILEGES ON * . * TO 'temp'@'localhost';"
mysql -u root -Bse "FLUSH PRIVILEGES;"
mysql -u root -Bse "GRANT GRANT OPTION ON * . * TO 'temp'@'localhost';"
cd ..
cd backend/constants
node ../../setup/helper/dev.js
mysql -u root -Bse "DROP USER 'temp'@'localhost'";
echo '[mysqld]' >> /etc/mysql/my.cnf
echo 'skip-networking=0' >> /etc/mysql/my.cnf
echo 'skip-bind-address' >> /etc/mysql/my.cnf
sudo systemctl restart mysql