# simple-home

We make stuff to make life in ur house ez

# For developers:

1. Run the `/setup/first_time.sh` file on the rpi ( if asked about mariadb questions, always answer no and empty passwords but for the reload tables question) WITH SUDO PRIVILEGES.
2. On your Windows computer, run the `/setup/dev.ps1` file.
3. In the mysql.json file now on your computer, change the host parameter from ```localhost``` to the ip address of the raspberry pi.
4. Run the `/setup/dev.sh` file on the rpi WITH SUDO PRIVILEGES (but this is untested, may be buggy) and skip steps 5-8 OR ignore this step and continue following the instructions .
5. Log in mysql with the `sudo mysql` command.
6. Run: `UPDATE mysql.user SET Host='%' WHERE Host='localhost' AND User='<<username>>';` on the rpi where you can find the username in the `/backend/constants/mysql.json` file on your Windows computer.
7. Run: `sudo nano /etc/mysql/my.cnf` on the rpi and copy the following block of code at the end of the code:

   ```
   [mysqld]
   skip-networking=0
   skip-bind-address
   ```
   
8. Run: `sudo systemctl restart mysql` on the rpi.
9. You can now test it all on your windows computer by running `npm run dev`!
