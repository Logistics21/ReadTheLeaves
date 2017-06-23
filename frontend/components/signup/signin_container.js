import { connect } from 'react-redux';
import { signin } from '../../actions/session_actions';
import SignUp from './signup_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({session}) => {
  return {
    errors: session.errors
  }
};

const mapDispatchToProps = (dispatch) => {
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
