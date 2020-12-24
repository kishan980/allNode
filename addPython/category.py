import pyodbc

conn = pyodbc.connect(r'Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=C:\Users\kisha\Desktop\python\py_Databse\Database21.accdb;')
cursor = conn.cursor()
cursor.execute('select * from table [category]')
   
for row in cursor.fetchall():
    print (row)
