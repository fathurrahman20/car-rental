import React, { useState } from 'react';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [collapsed, setCollapsed] = useState(false);
  const tokenCustomer = localStorage.getItem('tokenCustomer');
  const navigate = useNavigate();

  const toggleNavbar = () => setCollapsed(!collapsed);

  function handleLogout() {
    localStorage.removeItem('tokenCustomer');
    navigate('/login');
  }

  return (
    <>
      <Navbar
        color="light"
        light
        className=" border-5 border-black"
        expand="md"
        fixed="top"
        id="navbar"
        style={{ backgroundColor: "#F1F3FF" }} 
      >
        <NavbarBrand href="/">
          <img src="/img/logo.svg" alt="logo BCR" />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse navbar className="navbar-section">
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/#services">Our Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#about">Why Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#testimonial">Testimonial</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#faq">FAQ</NavLink>
            </NavItem>
          </Nav>
          {tokenCustomer ? (
            <Button className="btn-navbar border-0" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <>
              <Button className="btn-navbar border-0" onClick={() => navigate('/register')}>
                Register
              </Button>
              <Button className="btn-navbar border-0" onClick={() => navigate('/admin')}>
                Admin
              </Button>
            </>
          )}
        </Collapse>
        <Offcanvas toggle={toggleNavbar} isOpen={collapsed} direction="end" fade>
          <OffcanvasHeader toggle={toggleNavbar}>BCR</OffcanvasHeader>
          <OffcanvasBody>
            <Nav className="ml-auto navbar-section" navbar>
              <NavItem>
                <NavLink href="/#services">Our Services</NavLink>
              </NavItem>
              <NavItem style={{ marginLeft: '-32px' }}>
                <NavLink href="/#about">Why Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#testimonial">Testimonial</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#faq">FAQ</NavLink>
              </NavItem>
              {tokenCustomer ? (
                <li className="mt-2" style={{ marginLeft: '-32px' }}>
                  <Button className="btn-navbar border-0" onClick={handleLogout}>
                    Logout
                  </Button>
                </li>
              ) : (
                <>
                  <li className="mt-2" style={{ marginLeft: '-32px' }}>
                    <Button className="btn-navbar border-0" onClick={() => navigate('/register')}>
                      Register
                    </Button>
                  </li>
                  <li className="mt-3" style={{ marginLeft: '-32px' }}>
                    <Button className="btn-navbar border-0" onClick={() => navigate('/admin')}>
                      Admin
                    </Button>
                  </li>
                </>
              )}
            </Nav>
          </OffcanvasBody>
        </Offcanvas>
      </Navbar>
    </>
  );
}
