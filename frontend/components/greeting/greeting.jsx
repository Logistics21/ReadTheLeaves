import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = () => (
  <nav className="signin-signup">
    <Link to="/signin">Login</Link>
    <NavLink to="/signup">Sign up!</NavLink>
  </nav>
);

const userGreeting = (currentUser, signout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.firstname}!</h2>
    <button className="header-button" onClick={signout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, signout }) => (
  currentUser ? personalGreeting(currentUser, signout) : navLinks()
);

export default Greeting;
