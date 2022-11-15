import express  from  "express";
import routes from './routes.js'//sempre coloque a extenção do arquivo
import cors from 'cors' //yarn add cors

const api = express();

api.use(cors())
api.use(express.json());

api.use('/', routes);  //redireciona a entrada

api.listen('3333', () => {
  console.log('Server is Running...');
});

