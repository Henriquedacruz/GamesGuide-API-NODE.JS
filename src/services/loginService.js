import database from '../connection/connection.js'

async function login(userName, password){
  const conn = await database.connect();
  const sql = 'select * from tbl_user WHERE email = ? AND password = ?;';
  const dataLogin = [userName,password];

  const [rows] = await conn.query(sql,dataLogin)

  conn.end()

  return rows
}

export default {login}