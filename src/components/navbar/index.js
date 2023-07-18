import React, { useState } from "react";
import {
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
} from "reactstrap";

export default function Header(props) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <Navbar
        color="light"
        light
        className=" border-5 border-black"
        expand="md"
        fixed="top"
        id="navbar"
      >
        <NavbarBrand href="/">
          <img src="/img/logo.svg" alt="logo BCR" />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse navbar className="navbar-section">
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/#services/">Our Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#why-us/">Why Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#testimonial/">Testimonial</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#faq/">FAQ</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <Offcanvas
          toggle={toggleNavbar}
          isOpen={collapsed}
          direction="end"
          fade
        >
          <OffcanvasHeader toggle={toggleNavbar}>BCR</OffcanvasHeader>
          <OffcanvasBody>
            <Nav className="ml-auto navbar-section" navbar>
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
          </OffcanvasBody>
        </Offcanvas>
      </Navbar>
    </>
  );
}
