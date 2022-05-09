import mysql from 'mysql';

const con = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '1234',
  database : 'board',
  port : 3307
})

export default con;