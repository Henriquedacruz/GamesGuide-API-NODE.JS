import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import api from '../../service/api'



function Index() {

  const[email,setEmail] = useState(''),
  [password,setPassword] = useState(''),
  [userName,setUserName] = useState('');


  async function createUser(){
try {
   await api.post('/user', { email,password,userName })

   alert(`Usuario ${userName} cadastrado com sucesso`)
  } 
catch(err){
  alert(`Houve um erro: ${err}`) 
}
}

  return (
   <div className='contanier'>
     <Form>
     <Form.Group className="mb-3" controlId="formBasicEmail">

      <Form.Label className='text'>Email address</Form.Label>
      
      <Form.Control 
       className='input'
       type="email"
       value={email} 
       onChange={e => setEmail(e.target.value) }
      //  e = abreviação de event
       placeholder="Enter email" />

      <Form.Label className='text'>User name</Form.Label>
      <Form.Control className='input' 
      placeholder="Enter User name" 
      value={userName}
      onChange={e => setUserName(e.target.value) }/>

     </Form.Group>
  
     <Form.Group className="mb-3" controlId="formBasicPassword">

      <Form.Label className='text'>Password</Form.Label>

      <Form.Control 
      type="password" 
      placeholder="Password"
      value={password}
      onChange={e => setPassword(e.target.value) } />

     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check className='text' type="checkbox" label="Check me out" />
     </Form.Group>

     <Button variant="primary" 
     type="submit"
     onClick={createUser}>
      Cadastrar
     </Button>
     </Form>
   </div>
  )
}

export default Index