import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const NavBar = ({signedIn, signout}) => {
  const navbarRight = () => {
    if (signedIn) {
      return (
        <button className="nav-button" onClick={signout}>SIGN OUT</button>
      );
    } else {
      return (
        <div>
          <Link className="nav-button" to="/signin">SIGN IN</Link>
          <NavLink className="nav-signup-button" to="/signup">SIGN UP</NavLink>
        </div>
      );
    }
  };

  return (
    <div className="navbar-container">
      <div className="nav-links">
        <Link to="/cities">Cities</Link>
        <Link to="/hosting">Hosting</Link>
        <Link to="/about">About</Link>
        {navbarRight()}
      </div>
    </div>
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
