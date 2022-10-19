import express  from  "express";
import routes from './routes.js'
import cors from 'cors' 

const api = express();

api.use(cors())
api.use(express.json());

api.use('/', routes);  //redireciona a entrada

api.listen('8080', () => {
  console.log('Server is Running...');
});

