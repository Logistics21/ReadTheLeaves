import { connect } from 'react-redux';
import { signup, signin } from '../../actions/session_actions';
import SignUp from './signup_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({session}) => {
  return {
    signedIn: Boolean(session.currentUser),
    errors: session.errors
  }
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1)
  const action = formType === "signin" ? signin : signup;
  return {
    processForm: (user) => dispatch(action(user)),
    signin: user => dispatch(signin(user)),
    formType,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp));
