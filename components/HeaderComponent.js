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
        <Jumbotron fluid>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-3 text-left'>
                <h1>Planty</h1>
                <h3>In Plants We Trust</h3>
              </div>
            </div>
          </div>
        </Jumbotron>

        <Navbar dark sticky='top' expand='md'>
          <div className='container'>
            <NavbarBrand className='mr-auto' href='/'>
              <img src="./assets/images/noun-plant-1009164.svg" height='30' width='30' alt='Planty Logo'/>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className='nav-link' to='/home'>
                    <i className='fa fa-home fa-lg' /> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/localshops'>
                    <i className='fa fa-map fa-lg' /> Local Shops
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/plantcare'>
                    <i className='fa fa-info fa-lg' /> Plant Care
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
