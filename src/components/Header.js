import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './homecomponents/images/Badger_W.png'
const Header = () => {
    
  return (
<>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/"> Home </Nav.Link>
            <Nav.Link href="/Contact"> Contact Me </Nav.Link>
            <Nav.Link href="/People"> Interesting People </Nav.Link>
            <Nav.Link href="/Sites"> Interesting Sites </Nav.Link>
            <Nav.Link href="/About"> About </Nav.Link>
          </Nav>
          <img src={logo} alt="W" className='badger_img'/>
        </Container>
      </Navbar>
      </>
  );
}

export default Header