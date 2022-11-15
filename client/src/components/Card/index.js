import React from 'react'
import { CardGroup } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Footer } from 'react-bootstrap'
import {Link} from 'react-router-dom'


function index() {
  return (
    <CardGroup >
  <Card>
    <Link to ='/Guia'>
  
    <Card.Img variant="top" src="https://images7.alphacoders.com/439/439636.jpg" />
    <Card.Body>
      <Card.Title>GTAV </Card.Title>
      <Card.Text>
        Jogo de mundo aberto da rockstar
      </Card.Text>
    </Card.Body>
    </Link>
  </Card>
  <Card>
  
    <Card.Img variant="top" src="https://images7.alphacoders.com/516/516677.jpg" />
    <Card.Body>
      <Card.Title> MK11</Card.Title>
      <Card.Text>
        Jogo de luta, contem sangue e violência
      </Card.Text>
    </Card.Body>
    
      
    
  </Card>
  <Card>
  
    <Card.Img variant="top" src="https://images6.alphacoders.com/601/601245.png" />
    <Card.Body>
      <Card.Title>Need for speed</Card.Title>
      <Card.Text>
        Jogo para quem gosta de alta velocidade 
      </Card.Text>
    </Card.Body>
    
      
   
  </Card>
</CardGroup>
  ) 
}

export default index