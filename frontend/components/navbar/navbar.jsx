import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

class NavBar extends React.Component {
  // const isSignedIn = [CITIES, HOSTING, ABOUT, SIGNIN, SIGNUP, SIGNOUT]

  handleSignOut(e) {
    return e => {
      e.preventDefault()
      signOut()
      history.push('/')
    }
  };

  render() {
    // debugger


    return (
      <h1>NavBar</h1>
    )
  }
}

export default withRouter(NavBar);
