import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Collapse, Navbar, NavbarToggler, NavbarBrand,   UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import firebase from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Dashboard from './Dashboard';
import Compare from './Compare';
import Settings from './Settings';
import Calendar from './calendar';
import PhotoGallery from './PhotoGallery';
import GoalsUpdate from './GoalsUpdate';
import { firebaseDb } from './firebase';
import * as actions from './action';
class Navigation extends Component {
  
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
    
  }
  
  render() {
    return (
      <div>
          <Navbar id="myNavbar"  className="navbar navbar-default navbar-fixed-top" role="navigation" color="faded" light>
          <NavbarBrand id="navLink3" href="/" className="mr-auto"><i className="fas fa-home"></i>Home</NavbarBrand>
          <NavbarBrand id="navLink2" href="/About" className="mr-auto"><i className="fas fa-address-card"></i>About</NavbarBrand> 
          <NavbarBrand id="navLink2" href="/contact" className="mr-auto"><i className="fas fa-phone-square"></i>contact Us</NavbarBrand>
      <NavbarBrand  className="mr-auto"></NavbarBrand> 
          <NavbarBrand id="navLink2" href="/Dashboard" className="mr-auto"><i className="fas fa-user-minus"></i>Dashboard</NavbarBrand>
          <NavbarBrand id="navLink2" href="/chat" className="mr-auto"><i className="fas fa-book"></i>Chat With Firends</NavbarBrand>
          {/* <NavbarBrand id="navLink2" href="/profile" className="mr-auto"><i className="fas fa-user-minus"></i>Profile</NavbarBrand>
          <NavbarBrand id="navLink2" href="/chat" className="mr-auto"><i className="fas fa-book"></i>Chat With Firends</NavbarBrand> */}
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
            <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              </Nav>
          </Collapse>
        </Navbar>
        <hr />
    </div>
    );
  }
}
export default Navigation;