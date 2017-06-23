import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const NavBar = ({signedIn, signout}) => {
  const navbarRight = () => {
    if (signedIn) {
      return (
        <button className="nav-item nav-button" onClick={signout}>SIGN OUT</button>
      );
    } else {
      return (
        [
          <Link key="1" className="nav-item nav-button" to="/signin">SIGN IN</Link>,
          <NavLink key="2" className="nav-item nav-signup-button" to="/signup">SIGN UP</NavLink>
        ]
      );
    }
  };

  return (
    <header className="header">
      <div className="navbar-container">
        [<div className="logo-container">]
          <i className="fa fa-envira fa-lg" aria-hidden="true"></i>
          <i className="fa fa-leaf fa-lg" aria-hidden="true">Read The Leaves</i>
        </div>
        <div className="nav-links">
          <Link className="nav-item" to="/cities">CITIES</Link>
          <Link className="nav-item" to="/hosting">HOSTING</Link>
          <Link className="nav-item" to="/about">ABOUT</Link>
          {navbarRight()}
        </div>
      </div>
    </header>
  );
};

export default NavBar;




// city() {
//   if (this.props.signedIn) {
//     return (
//       <Link to="/cityId">{this.props.currentUser.city_name}</Link>
//     );
//   } else {
//     return null;
//   }
// }

// {this.city()}
