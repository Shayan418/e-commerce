import {
  Navbar,
  Nav,
  NavLink,
  NavItem,
  NavbarBrand,
  Button,
  Container,
  NavDropdown,
} from 'react-bootstrap';
import React, { useContext } from 'react';
import { AiFillShop, AiOutlineShoppingCart } from 'react-icons/ai';
import useWindowSize from '../../utils/useWindowSize';
import AuthContext from '../../context/authContext';

function Newheader() {
  const size = useWindowSize();
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          E-Comerce <AiFillShop />
        </Navbar.Brand>
        {size.width <= 990 ? (
          <div className="d-flex flex-grow-1 justify-content-end">
            <Nav.Link href="#" className="d-flex ">
              <AiOutlineShoppingCart />
            </Nav.Link>
          </div>
        ) : null}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            {user ? (
              <NavDropdown title={`Hi! ${user.first_name}`} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logoutUser} href="/logout">Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown title="Login" id="basic-nav-dropdown">
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
        {size.width > 990 ? (
          <Nav.Link href="#">
            <AiOutlineShoppingCart />
          </Nav.Link>
        ) : null}
      </Container>
    </Navbar>
  );
}

export default Newheader;
