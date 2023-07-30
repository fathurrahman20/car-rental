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
import { Link } from "react-router-dom";

export default function Header(props) {
  const [collapsed, setCollapsed] = useState(false);
  const tokenCustomer = localStorage.getItem("tokenCustomer");

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
          {!tokenCustomer && (
            <p className="my-md-auto">
              <Link
                to="/register"
                className="btn-register text-decoration-none"
              >
                Register
              </Link>
            </p>
          )}
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
              {!tokenCustomer && (
                <li>
                  <p className=" my-md-auto mt-2">
                    <Link
                      to="/register"
                      className="btn-register text-decoration-none ms-0"
                    >
                      Register
                    </Link>
                  </p>
                </li>
              )}
            </Nav>
          </OffcanvasBody>
        </Offcanvas>
      </Navbar>
    </>
  );
}
