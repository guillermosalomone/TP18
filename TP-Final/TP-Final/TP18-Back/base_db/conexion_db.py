import mysql.connector

config_dev = {
  'user': 'root',
  'password': '',
  'host': '127.0.0.1:5000',
  'database': 'subs',
}

'''
config_prod = {
  'user': 'ChToleCAC',
  'password': '2024CACPythonFS',
  'host': 'ChToleCAC.mysql.pythonanywhere-services.com',
  'database': 'ChToleCAC$default',
}
'''

conexion = mysql.connector.connect(**config_dev)       