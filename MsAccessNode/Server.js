var express = require('express');
var app = express();

const ADODB = require('node-adodb');
// const connection = ADODB.open('Driver={Microsoft Access Driver (*.mdb, *.accdb)}; DBQ=C:\Users\kisha\OneDrive\Documents\gloryDemo.accdb');
const connection = ADODB.open('Provider=Microsoft.ACE.OLEDB.12.0;Data DBQ=C:\Users\kisha\OneDrive\Documents\gloryDemo.accdb;Persist Security Info=False;');
console.log(connection);
async function query() {
  try {
    const users = await connection.query('SELECT * FROM category');
 
    console.log(JSON.stringify(users, null, 2));
  } catch (error) {
    console.error(error);
  }
}
 
query();

var server = app.listen(50001, function () {
    console.log('Server is running.. 5000');
});