// import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
// import { FaUser } from 'react-icons/fa';
import Logo from '../assets/RDKWorldwide.png';
import { LinkContainer } from 'react-router-bootstrap';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <header className="header">
      <Navbar className="" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src={Logo}
                alt="Logo"
                style={{ height: '85px', width: 'auto' }}
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#" className="animated scaleCenter">Home</Nav.Link>
              <Nav.Link href="#" className="animated scaleCenter">Subscription</Nav.Link>
              <Nav.Link href="#" className="animated scaleCenter">Interviews</Nav.Link>
              <Nav.Link href="#" className="animated scaleCenter">Services</Nav.Link>
              <Nav.Link href="#" className="animated scaleCenter">Contact</Nav.Link>
              <Nav.Link href="#" className="animated scaleCenter">Store</Nav.Link>
              <Nav.Link href="#" className="animated scaleCenter">Book</Nav.Link>
              <Nav.Link href="#" className="animated scaleCenter">Up Next</Nav.Link>
              <NavDropdown title="Music" id="basic-nav-dropdown" className="animated scaleCenter">
                <NavDropdown.Item href="#">New Music</NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Music Videos
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
