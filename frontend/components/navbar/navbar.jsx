import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({session, signedIn, signout, clearErrors}) => {
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
            key="3"
            className="nav-item nav-button"
            to="/signin">SIGN IN
          </Link>,
          <NavLink
            onClick={() => clearErrors()}
            key="4"
            className="nav-item nav-signup-button"
            to="/signup">SIGN UP
          </NavLink>
        ]
      );
    }
  };
``
  const profileLinks = () => {
    if (signedIn) {
      return (
        [
          <Link key="1" className="nav-item" to="/dashboard">DASHBOARD</Link>,
          <Link key="2" className="nav-item" to={`/profile/${session.currentUser.id}`}>PROFILE</Link>
        ]
      );
    } else {
      return null;
    }
  }

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <Link to="/"><i className="fa fa-envira fa-lg" aria-hidden="true"></i></Link>
        <Link to="/"><i className="fa fa-leaf fa-lg right-leaf" aria-hidden="true"></i></Link>
        <Link className="logo-text" to="/"> Read The Leaves</Link>

      </div>
      <div className="nav-links">
        {profileLinks()}
        <Link className="nav-item" to="/cities">CITIES</Link>
        <Link className="nav-item" to="/new_event">HOSTING</Link>
        {navbarRight()}
      </div>
    </div>
  );
};

export default NavBar;
