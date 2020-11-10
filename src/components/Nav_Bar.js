import React, { Component, useState } from "react";
import {
  Collapse,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Navbar,
} from "reactstrap";
import MenuItems from "./MenuItem";
import { NavLink } from "react-router-dom";
class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState({
        isNavOpen: !this.state.isNavOpen
    });
    }
  render() {
    return (
      <div className="navi">
        <Navbar className="" expand="md">
          <div className="container">
              <img
                className="logo"
                src={"assets/logo/default.png"}
                alt="Logo"
              />
              <NavbarToggler onClick={this.toggleNav}/>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="menu ml-auto" navbar>
                {MenuItems.map((item) => {
                  return (
                    <NavItem>
                      <NavLink
                        style={{ textDecoration: "none", fontSize: 25 }}
                        to={item.url}
                        className={item.cName}
                      >
                       <span> {item.icon}</span>
                        {item.title}
                      </NavLink>
                    </NavItem>
                  );
                })}
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default NavBar;
