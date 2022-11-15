import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import api from '../../service/api'
import './login.css'

function Login(props) {
  const navigate = useNavigate();

  const [password, setPassword] = useState(""),
  [email, setEmail] = useState("");

  async function logar(){
    if(props.isSigned) return alert('Já ta logado cabaço')
    
    try{
      
      await api.post('/login', {password,email})
      
      props.changeSigned(true)
      navigate('/');
    }
    catch(error){
       alert(error)
    }
  }

  return (
   <div className='contanier'>
     <Form>
     <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label className='text'>Email address</Form.Label>
      <Form.Control className='input' 
      type="email"
      placeholder="Enter email"
      value = {email}
      onChange = {e => setEmail(e.target.value)} 
       />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
     </Form.Group>
  
     <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label className='text'>Password</Form.Label>
      <Form.Control 
      type="password" 
      placeholder="Password"
      value = {password}
      onChange = {e => setPassword(e.target.value)} />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check className='text' type="checkbox" label="Check me out" />
     </Form.Group>
     <Button 
     variant="primary" 
     onClick = {logar}>
      Submit
     </Button>
     </Form>
   </div>
  )
}

export default Login