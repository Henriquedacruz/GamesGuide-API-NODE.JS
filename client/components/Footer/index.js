import {Navbar} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import './style.css'


function index(props)  {
  return (
    <>
  <Navbar className='nav' bg="dark" variant="dark">
    <Container>
      <Navbar.Brand >
      Games shop
      </Navbar.Brand>
    </Container>
  </Navbar>
</>
    
  ) 
}
 export default index