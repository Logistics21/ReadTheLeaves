import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const NavBar = ({signedIn, signout, clearErrors}) => {
  const navbarRight = () => {
    if (signedIn) {
      return (
        <Link className="nav-item nav-button" to="/" onClick={signout}>SIGN OUT</Link>
      );
    } else {
      return (
        [
          <Link
            onClick={() => clearErrors()}
            key="1"
            className="nav-item nav-button"
            to="/signin">SIGN IN
          </Link>,
          <NavLink
            onClick={() => clearErrors()}
            key="2"
            className="nav-item nav-signup-button"
            to="/signup">SIGN UP
          </NavLink>
        ]
      );
    }
  };

  const profileLinks = () => {
    if (signedIn) {
      return (
        [
          <Link className="nav-item" to="/dashboard">DASHBOARD</Link>,
          <Link className="nav-item" to="/update_profile">PROFILE</Link>
        ]
      );
    } else {
      return null;
    }
  }

  return (
    <header className="header">
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/"><i className="fa fa-envira fa-lg" aria-hidden="true"></i></Link>
          <Link to="/"><i className="fa fa-leaf fa-lg right-leaf" aria-hidden="true"></i></Link>
          <Link className="logo-text" to="/"> Read The Leaves</Link>

        </div>
        <div className="nav-links">
          {profileLinks()}
          <Link className="nav-item" to="/cities">CITIES</Link>
          <Link className="nav-item" to="/hosting">HOSTING</Link>
          {navbarRight()}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
