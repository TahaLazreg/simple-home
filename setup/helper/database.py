import mysql.connector
from mysql.connector import Error

conn = None
try:
    conn = mysql.connector.connect(host='localhost',
                                   user='root',)
    if conn.is_connected():
        print('Connected to MySQL database')
except Error as e:
    print(e)
finally:
    if conn is not None and conn.is_connected():
        conn.close()