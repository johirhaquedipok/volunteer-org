import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Volunteer Org</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/donation">
              Donation
            </Nav.Link>
            <Nav.Link as={Link} to="/donation">
              Event
            </Nav.Link>
            <Nav.Link as={Link} to="/donation">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/donation">
              Admin
            </Nav.Link>
            <Button as={Link} to="/register">
              Register
            </Button>
            <Button as={Link} to="/admin" variant="dark">
              Admin
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
