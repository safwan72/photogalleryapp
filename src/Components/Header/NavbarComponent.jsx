import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

import { NavLink } from "react-router-dom";
import "../../App.css";

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="contaianer">
        <Navbar
          style={{ backgroundColor: "#463333", color: "white" }}
          expand="md"
        >
          <NavbarBrand
            href="/"
            style={{ color: "white", fontSize: "24px", marginLeft: "13px" }}
          >
            PhotoGallery App
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto mr-4" navbar>
              <NavItem>
                <NavLink to="/" exact className="nav-link">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/photogallery" className="nav-link">
                  PhotoGallery
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/feedback" className="nav-link">
                  Feedback
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavbarComponent;
