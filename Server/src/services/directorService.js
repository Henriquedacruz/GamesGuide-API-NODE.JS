import database from '../repository/connection.js';

async function insertDirector(nomeDiretor, nacionalidade, aniversario){
  const conn = await database.connect(); 
  const sql = 'insert into tbl_diretor(nome_diretor, nacionalidade, dt_nascimento) values(?,?,?);';
  const dataUser = [nomeDiretor, nacionalidade, aniversario];

  await conn.query(sql, dataUser); 
  conn.end();
}

export default {insertDirector};

