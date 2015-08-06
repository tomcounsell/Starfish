var React = require('react');
import { Navbar, Nav, NavItem, DropdownButton, MenuItem } from 'react-bootstrap';




var Navigation = React.createClass({
  render: function() {
    return (

  <Navbar brand='Open Entry Storefront'>
    <Nav>
      <NavItem eventKey={1} href='#'>About</NavItem>
      <NavItem eventKey={2} href='#'>Login</NavItem>
      <DropdownButton eventKey={3} title='Experts'>
        <MenuItem eventKey='1'>Sign Up</MenuItem>
        <MenuItem eventKey='2'>Learn More</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey='4'>View Jobs</MenuItem>
      </DropdownButton>
    </Nav>
  </Navbar>
      
    );
  }
});

module.exports = Navigation;
