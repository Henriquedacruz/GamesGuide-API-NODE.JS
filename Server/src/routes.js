import express from 'express';


import user from "./controllers/registrationController.js";
//import { verifyJWT } from './middlewares/jwt.js';
import login from "./controllers/loginController.js";


const route = express.Router();

//redirecioan as requisições para a controller correspondente
route.use('/registerUser', user);
route.use('/login', login);

export default route;
