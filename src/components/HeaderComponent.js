import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);


    this.state = {
      isNavOpen: false
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
      <React.Fragment>
        <Navbar dark sticky='top' expand='md'>
          <div className='container'>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className='nav-link' to='/home'>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/shop'>
                    Shop
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/contact'>
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        
        <Jumbotron fluid>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-3 text-left'>
                <h1>Eeks.</h1>
              </div>
            </div>
          </div>
        </Jumbotron>

        
      </React.Fragment>
    );
  }
}

export default Header;
