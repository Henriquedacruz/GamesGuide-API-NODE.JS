import database from '../repository/connection.js'

async function login(email, password){
  const conn = await database.connect();
  const sql = 'select * from tbl_usuario WHERE email = ? AND senha = ?;';
  const dataLogin = [email,password];

  const [rows] = await conn.query(sql,dataLogin)

  conn.end()

  return rows
}

export default {login}