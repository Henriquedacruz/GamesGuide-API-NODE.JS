import React from 'react'
import Login from '../../components/Login/login';
import Img from '../../components/imagens/index'
import '../../pages/Login/style.css'


function index(props)  {
  return (
   <>
   <Img />
   <Login changeSigned={props.changeSigned} isSigned={props.isSigned}/>
   </>
  ) 
}

export default index

