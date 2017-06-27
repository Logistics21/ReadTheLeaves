
import { connect } from 'react-redux';
import { signup, signin } from '../../actions/session_actions';
import SignUp from './signup_form';
import { withRouter } from 'react-router-dom';
import { clearErrors } from '../../actions/errors_actions';

const mapStateToProps = ( { errors } ) => {
  return {
    errors: errors.errors,
  }
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    signin: (user) => dispatch(signin(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp));
