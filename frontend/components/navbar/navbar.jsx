import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import Flash from '../flash/flash';

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

  return (
    <header className="header">
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/"><i className="fa fa-envira fa-lg" aria-hidden="true"></i></Link>
          <Link to="/"><i className="fa fa-leaf fa-lg right-leaf" aria-hidden="true"></i></Link>
          <Link className="logo-text" to="/"> Read The Leaves</Link>

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



// <Flash message={ signedIn } />

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
