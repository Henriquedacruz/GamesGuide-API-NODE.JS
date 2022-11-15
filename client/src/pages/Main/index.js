import React from 'react'
import Carousel from '../../components/Carousel';
import CardGroup from '../../components/Card/index';
// import CardGroup2 from '../../components/Card/index2';
import './style.css';


function index(props)  {
  return (
    <div className='container'>
    <> 
      
      <Carousel />
      <CardGroup />
      {/* <CardGroup2 /> */}
      
      
    </>
    </div>
  ) 
}

export default index

