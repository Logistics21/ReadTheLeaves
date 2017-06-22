import { connect } from 'react-redux';
import { signin, signup, signout } from '../../actions/session_actions';
import NavBar from './navbar.jsx';

const mapStateToProps = ({ session, history }) => {
  return {
    session,
    signedIn: Boolean(session.currentUser),
    history
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    signout: () => dispatch(signout()),
    signup: () => dispatch(signup()),
    signin: () => dispatch(signin())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
