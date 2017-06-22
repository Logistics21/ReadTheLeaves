import { connect } from 'react-redux';
import { signout } from '../../actions/session_actions';
import NavBar from './navbar';

const mapStateToProps = ({ session }) => {
  return {
    session,
    signedIn: Boolean(session.currentUser),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(signout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
