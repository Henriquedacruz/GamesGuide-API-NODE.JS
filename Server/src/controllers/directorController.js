import express from "express";
import {body, validationResult} from 'express-validator';
import db from '../services/directorService.js';

const router = express.Router();

router.post('/', [
  body('nomeDiretor').isString().withMessage('informe nome válido'),
  body('aniversario').isLength({min:8}).withMessage('A data deve conter no minimo 8 numeros'),
] , async (request, response) => {

  const {nomeDiretor, nacionalidade, aniversario} = request.body;
  const errors = validationResult(request);

  if(!errors.isEmpty()){
      return response.status(400).json({message: errors.array()});
  }

  try{
    await db.insertUser(nomeDiretor, nacionalidade, aniversario);

  response.status(201).json({message: 'Diretor inserido com sucesso'});
  }catch(err) {
    response.status(500).json({message:
    `Encontramos um erro: ${err}`})};
 
});

export default router;