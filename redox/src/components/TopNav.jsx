import React from "react";
import { NavLink } from "react-router-dom";
import "./CSS/TopNav.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";

export const TopNav = () => {
  return (
    <nav>
      <div>
        <Navbar collapseOnSelect expand="lg" id="topnav">
          <Container>
            <Navbar.Brand id="redox" href="/">
              Redox.
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto" id="main"></Nav>
              <Nav>
                <NavLink to="/" className="link_nav">
                  Home
                </NavLink>
                <NavLink to="products" className="link_nav">
                  Products{" "}
                </NavLink>
                <NavLink to="/about" className="link_nav">
                  About{" "}
                </NavLink>
                <NavLink to="/contact" className="link_nav">
                  Contact{" "}
                </NavLink>
                <NavLink to="/cart" className="link_nav">
                  Cart
                  <ShoppingCartIcon />
                </NavLink>
                <NavLink to="/login" className="link_nav">
                  Login
                  <PersonIcon />
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </nav>
  );
};
