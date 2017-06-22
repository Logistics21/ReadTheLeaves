import { connect } from 'react-redux';
import { signin, signup, signout } from '../../actions/session_actions';

const mapStateToProps = ({ session, history }) => {
  return {
    session,
    signedIn: Boolean(session.currentUser),
    history
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'signin') ? signin : signup;
  return {
    signout: () => dispatch(signout()),
    signup: () => dispatch(signup()),
    signin: () => dispatch(signin()),
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
