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

    if (this.props.formType === "signin") {
      this.header = "Join for tea time"
    } else {
      this.header = "Hey Stranger!"
    }

    this.guestSignIn = this.guestSignIn.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signin) this.props.history.push('/');
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  guestSignIn(e) {
    e.preventDefault();
    const guestUser = { user: { email: "guest@gmail.com", password: "password"} }
    this.action = signin;
    debugger
    this.props.processForm(guestUser);
    // .then(() => this.props.history.push('/cities'));
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  redirect() {
    if (this.props.formType === 'signin') {
      return <Link to="/signup">If you''ve never signed up before, click here and do that</Link>;
    } else {
      return <Link to="/signin">If you''ve already done this before, click here to log in</Link>;
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (<li key={i}>{error}</li>))}
      </ul>
    )
  };

  render() {
    if (this.formType === "signup") {
      return (
        <div className="signup-form-contianer">
          <form onSubmit={this.handleSubmit}
            className="sign-up-form">
            <h2 className="sign-up-header">
              {this.header}
            </h2>
            <p className="sign-up-p">
              Thousands of strangers across the world have sat together for conversations. We can't wait for you to join them.
            </p>
            <div className="sign-up-field">
              <input
                className="input-box"
                type="text"
                value={this.state.first_name}
                placeholder="First name (or nickname)"
                onChange={this.update('first_name')}
              />
              <input
                className="input-box"
                type="text"
                value={this.state.email}
                placeholder="Email address"
                onChange={this.update('email')}
              />
              <input
                className="input-box"
                type="password"
                value={this.state.password}
                placeholder="Password (at least 8 characters you won't forget!)"
                onChange={this.update('password')}
              />
            <input type="submit" value="LET'S GET TEA" />
            <button className="guest-button"
              onClick={this.guestSignIn}>GUEST SIGN IN
            </button>
            </div>
          </form>
        </div>
      )
    } else {
      return (
        <div className="signup-form-contianer">
          <form onSubmit={this.handleSubmit}
            className="sign-up-form">
            <h2 className="sign-up-header">
              {this.header}
            </h2>
            <p className="sign-up-p">
              It's good to have you back. Sign in here and sign up for your next tea time!
            </p>
            <div className="sign-up-field">
              <input
                className="input-box"
                type="text"
                value={this.state.email}
                placeholder="Email address"
                onChange={this.update('email')}
              />
              <input
                className="input-box"
                type="password"
                value={this.state.password}
                placeholder="Password (at least 8 characters you won't forget!)"
                onChange={this.update('password')}
              />
            <input type="submit" value="LET'S GET TEA" />
            <button className="guest-button"
              onClick={this.guestSignIn}>GUEST SIGN IN
            </button>
            </div>
          </form>
        </div>
      )
    }
  }
}

export default SignUp;
