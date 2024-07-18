import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavbarImplementation() {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container fluid>
        <Navbar.Brand href="#">Dekho Aur Lo - देखो और लो</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#action2">Products</Nav.Link>
            <NavDropdown title="Settings" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">
                Add Product
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
               Update/Delete Product
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex p-2 m-2">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className="me-3">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarImplementation;