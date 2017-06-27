import { connect } from 'react-redux';
import { signout } from '../../actions/session_actions';
import NavBar from './navbar';
import { clearErrors } from '../../actions/errors_actions';

const mapStateToProps = ({ session }) => {
  return {
    session,
    signedIn: Boolean(session.currentUser),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(signout()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
