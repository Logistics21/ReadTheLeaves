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

===========================

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'signin') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/signin">log in instead</Link>;
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signin-form-container">
        <form onSubmit={this.handleSubmit} className="signin-form-box">
          Read The Leaves
          <br/>
          {this.props.formType} or {this.navLink()}
          {this.renderErrors()}
          <div className="signin-form">
            <br/>
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signin-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signin-input"
              />
            </label>
            <br/>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
