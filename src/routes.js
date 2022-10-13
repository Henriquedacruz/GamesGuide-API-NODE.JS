import express from "express";
import director from "./controllers/directorController.js";
import { verifyJWT } from './middlewares/jwt.js';


const router = express.Router();

// a requisição será encaminhada para o controler correpondente a ela.
router.use('/', user);

export default router;