import React from 'react'
import { Carousel } from 'react-bootstrap'
import './style.css'

function index() {
  return (
    <Carousel className='caro'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images5.alphacoders.com/105/1056682.png"
      
    />
    <Carousel.Caption>
     Mais Vendidos
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images6.alphacoders.com/913/913243.jpg"
      
    />

    <Carousel.Caption>
     Mais Vendidos
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images8.alphacoders.com/720/720466.jpg"
      
    />

    <Carousel.Caption>
     Mais Vendidos
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}

export default index