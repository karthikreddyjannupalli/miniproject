import React, { Component } from "react";
import {
  Collapse,
  Nav,
  NavbarToggler,
  NavItem,
  Navbar,
  Button,
} from "reactstrap";
import MenuItems from "./MenuItem";
import { Link, NavLink, Redirect, useHistory } from "react-router-dom";
import "./Nav_bar.css"; 
class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      button: "Login/SignUp"
      //history: useHistory(),
    };
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  render() {
    return (
      <div className="navi">
        <Navbar className="" expand="md">
          <div className="container">
            <img className="logo" src={"assets/logo/default.png"} alt="Logo" />
            <NavbarToggler onClick={this.toggleNav} />
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
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button
                    className="nav-links"
                    href="/login"
                  >
                    {<span className="fa fa-sign-in fa-lg">{"Login/SignUp"}</span>}
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default NavBar;
