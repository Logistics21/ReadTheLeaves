import { connect } from 'react-redux';
import { signin } from '../../actions/session_actions';
import SignUp from './signup_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({session}) => {
  debugger
  return {
    errors: session.errors
  }
};

const mapDispatchToProps = (dispatch) => {
  debugger
  return {
    processForm: (user) => dispatch(signin(user)),
    signin: (user) => dispatch(signin(user))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp));
