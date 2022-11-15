//importando a funcionalidade do mysql2 para usar promisses
import mysql from 'mysql2/promise';

//realiza a conexão com o banco
async function connect() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user:  'root',
    password: '123456',
    database: 'observatorio'
  });

  return connection;
}

export default {connect};
