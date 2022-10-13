//Instalar e importar mysql2 para usar promisses
import mysql from 'mysql2/promise';

//realiza a conexão com o banco
async function connect() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user:  'root',
    password: '123456',
    database: 'gamesguide'
  });

  return connection;
}

export default {connect};
