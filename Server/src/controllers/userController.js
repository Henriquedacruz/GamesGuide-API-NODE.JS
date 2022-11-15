import express, { request, response } from "express";
import {body, validationResult} from 'express-validator';

import db from '../services/userService.js';

//variavel 
const router = express.Router();


//request é oq o front envia para o back 
//response oq o back envia para o front
router.post('/', [
  body('email').isEmail().withMessage('informe um email válido'),
  body('password').isLength({min:7, max: 12}).withMessage('a senha deve conter entre 7 e 12 caracteres'),
] , async (request, response) => {

  //const para cada um modo antigo
  /*const email = request.body.email;
  const password = request.body.password;
  const userName = request.body.userName;*/

  const {email, password, userName} = request.body;
  const errors = validationResult(request);

  if(!errors.isEmpty()){
      return response.status(400).json({message: errors.array()});
  }


  //debug
  //console.log("email:",email,"senha:", password,"usuario:", userName);

  //inseri os dados
  try{
    await db.insertUser(email, password, userName);

  response.status(201).json({message: 'Usuario cadastrado com sucesso'});
  }catch(err) {
    response.status(500).json({message:
    `Encontramos um erro: ${err}`})};
 
});

router.get('/', async (request, response)=>{

  try{
    const result = await db.findUser()
    console.log(result)

    if(result.length == 0){
      response.status(204).end('encontramos um erro')
    }
    else{
      response.status(200).json(result)
    }
  }  
  catch{
    response.status(500).json(error)
  }
      
});

router.put('/', [ 
body('email').isEmail().withMessage('informe um email válido'),
body('password').isLength({min:7, max: 12}).withMessage('a senha deve conter entre 7 e 12 caracteres'),
], async (request, response) => {

  const errors = validationResult(request);
  if(!errors.isEmpty()){
    return response.status(400).json({message: errors.array()});
  }

  const {email, password, userName, idUser} = request.body;

  try{
    await db.updateUser(email, password, userName, idUser);
    response.status(200).json({message: 'Usuário atulizado com sucesso'})
  }catch(err){
    response.status(500).json({message: `Houve um erro ao atualiza Erro: ${err}`})
  }
})


router.delete('/:idUser',async (request, response) => {
    const {idUser} = request.params

    try{
        await db.deleteUser(idUser);
        response.status(200).json({message: 'Item excluido com sucesso'})
      }catch(err){
        response.status(500).json({message: `Houve um erro ao excluir Erro: ${err}`})
      }

})



export default router;