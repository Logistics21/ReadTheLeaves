import React from 'react';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      email: '',
      password: '',
    };

    this.guestSignIn = this.guestSignIn.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  header() {
    if (this.props.location.pathname === "/signup") {
      return (
        <div className="header-container">
          <h2 className="sign-up-header">
            Join for tea time
          </h2>
          <p className="sign-up-p">
            Thousands of strangers across the world have sat together for conversations. We can't wait for you to join them.
          </p>
        </div>
      );
    } else {
      return (
        <div className="header-container">
          <h2 className="sign-up-header">
            Hey stranger!
          </h2>
          <p className="sign-up-p">
            It's good to have you back. Sign in here and sign up for your next tea time!
          </p>
        </div>
      );
    }
  }

  guestSignIn(e) {
    e.preventDefault();
    const guestUser = { email: "guest@gmail.com", password: "password" };
    this.props.signin(guestUser)
    .then(() => this.props.history.push('/cities'));
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user)
    .then(() => this.props.history.push('/cities'));
  }

  nameInput() {
    if (this.props.location.pathname === "/signup") {
      return (
        <input
          className="input-box"
          type="text"
          placeholder="First name (or nickname)"
          onChange={this.update('first_name')}
        />
      );
    } else {
      return null;
    }
  }

  redirect() {
    if (this.props.location.pathname === '/signin') {
      return <Link
              onClick={() => this.props.clearErrors()}
              className="redirect" to="/signup">
              If you've never signed up before, click here and do that
              </Link>
    } else {
      return <Link
              onClick={() => this.props.clearErrors()}
              className="redirect" to="/signin">
              If you've already done this before, click here to log in
            </Link>
    }
  }

  renderErrors() {
    if (this.props.errors.length !== 0) {
      return(
        <ul className="errors-list">
          {this.props.errors.map((error, i) => (
            <li className="error" key={i}>{error}</li>
          ))}
        </ul>
      );
    } else {
      return (
        <ul className="no-errors"></ul>
      );
    }
  }

  render() {
    return (
      <div className="signup-form-container">
        { this.renderErrors() }
        <form onSubmit={this.handleSubmit}
          className="sign-up-form">
          {this.header()}
          <div className="sign-up-field">
            {this.nameInput()}
            <input
              className="input-box"
              type="text"
              placeholder="Email address"
              onChange={this.update('email')}
            />
            <input
              className="input-box"
              type="password"
              placeholder="Password (at least 8 characters you won't forget!)"
              onChange={this.update('password')}
            />
          <input className="signup-button" type="submit" value="LET'S GET TEA" />
          <button className="signup-button"
            onClick={this.guestSignIn}>GUEST SIGN IN
          </button>
          </div>
        </form>
        {this.redirect()}
      </div>
    );
  }
}

export default SignUp;
