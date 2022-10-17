import database from '../connection/connection.js'; //conexão com o banco

async function insertUser(email, password, userName){
  const conn = await database.connect(); 
 
  //variavel que inseri dados no banco
  //variaveis com ??? para armazenar os dados recebidos do front
  const sql = 'INSERT INTO tbl_usuario(email, senha, nome_usuario) values(?,?,?);';

  const dataUser = [email, password, userName];

  //query executa a variavel 'sql' e a 'dataUser' no banco e dados
  await conn.query(sql, dataUser); /*comando .query serve para executar a açõa 
  dentro do Banco de dados*/

  //end para finalizar a conexão com o banco, por questões de performace e segurança
  conn.end();
}
//listar usuarios
async function findUser(){
  const conn = await database.connect()
  const sql = 'select * from tbl_usuario'
  const [rows] = await conn.query(sql)//filtra dados desnecessarios 
  conn.end()
  return rows
}
//atualizar susuario
async function updateUser(email, password, userName, idUser){
  const conn = await database.connect()
  const sql = 'UPDATE tbl_usuario SET email =?, senha =?, nome_usuario =? WHERE id_usuario =?';
  const dataUser = [email, password, userName, idUser];
  await conn.query(sql, dataUser);
  conn.end()
  return;
}
//deletar usuario
async function deleteUser(idUser){
    const conn = await database.connect()
    const sql = 'DELETE FROM tbl_usuario WHERE id_usuario =?';
    const dataUser = [idUser];
    await conn.query(sql, dataUser);
    conn.end()
    return; 
    
}

export default {insertUser, findUser, updateUser,deleteUser};

