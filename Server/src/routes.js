import express from "express";
import user from "./controllers/userController.js";
import login from "./controllers/loginController.js";
import gender from './controllers/genderController.js';
import director from "./controllers/directorController.js";
import { verifyJWT } from './middlewares/jwt.js';


const router = express.Router();

// se a requisição for referente a usuario ela sera mandada para o controller de usuario
router.use('/user', user);
router.use('/login', login)
router.use('/gender', gender);

export default router;