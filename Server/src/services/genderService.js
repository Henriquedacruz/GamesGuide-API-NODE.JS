import database from '../repository/connection.js';

async function insertGenero(nomeFilme, genero){
  const conn = await database.connect(); 
  const sql = 'insert into tbl_genero(id_genero, genero ) values(?,?);';
  const dataGender = [nomeFilme, genero ];

  await conn.query(sql, dataGender); 
  conn.end();
}

async function findgenero(){
  const conn = await database.connect();
  const sql = 'SELECT * FROM tbl_genero';
  const [rows] = await conn.query(sql)
  conn.end();
  return rows;
}

async function updateGender(id_genero, genero){
  const conn = await database.connect()
  const sql = 'UPDATE tbl_genero SET  genero =?  WHERE id_genero =?';
  const dataGenero = [genero, id_genero ];
  await conn.query(sql, dataGenero);
  conn.end()
  return;
}

async function deleteGender(id_genero){
    const conn = await database.connect()
    const sql = 'DELETE FROM tbl_genero WHERE id_genero =?';
    await conn.query(sql, id_genero);
    conn.end()
    return; 
    
}
export default {insertGenero, findgenero, updateGender, deleteGender};
