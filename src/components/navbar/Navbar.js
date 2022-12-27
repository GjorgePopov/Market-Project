import "./Navbar.css"
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import searchicon from '../../assets/icons/search.png'
import user from '../../assets/icons/user.png'
import shopingbag from '../../assets/icons/shopping-bag.png'
import { NavLink} from "react-router-dom"




  


const NavigationBar = () => {
  return (
    <Navbar  expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">🛒Fresh Market</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/shop">Shop</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>

            

                

           
          
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <img src={searchicon} width='30px' height='30px'/>

           
          </Form>

          <span>

            <img src={user}  width='30px' height='30px'/>
            Log In
          </span>

          <img src={shopingbag}  width='30px' height='30px'/>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
