import React from 'react'
import { CardGroup } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Footer } from 'react-bootstrap'
import {Link} from 'react-router-dom'


function index() {
  return (
    <CardGroup >
  <Card>
  
    <Card.Img variant="top" src="https://cdn.blenner.net/app/clickwallpapers/clickwallpapers-rocket-league-wallpaper_img3.jpg" />
    <Card.Body>
      <Card.Title>Rocket league</Card.Title>
      <Card.Text>
        Futebol de carros
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>

    <Card.Img variant="top" src="https://www.geeksunited.com.br/wp-content/uploads/2019/02/sekiro-min.png" />
    <Card.Body>
      <Card.Title>Sekiro</Card.Title>
      <Card.Text>
        Jogo velho que o Antonio gosta
      </Card.Text>
    </Card.Body>
    
      
    
  </Card>
  <Card>
 
    <Card.Img variant="top" src="https://s3-sa-east-1.amazonaws.com/youportal/fotos/noticias/15804/gd/servidores-de-dark-souls-sao-desligados_2bht.jpg" />
    <Card.Body>
      <Card.Title>Dark Souls</Card.Title>
      <Card.Text>
       Jogo de quem gosta de ser altamente ridicularizado,pois caso voce zere esse Jogo
       saberemos que voce não tem vida social
      </Card.Text>
    </Card.Body>
    
      
   
  </Card>
</CardGroup>
  ) 
}

export default index