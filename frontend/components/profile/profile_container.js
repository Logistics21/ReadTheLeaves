import { connect } from 'react-redux';
import { leaveEvent, removeEvent } from '../../actions/users_actions';

import Profile from './profile';

const mapStateToProps = ({ session }) => {
  return {
    user: session.currentUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    leaveEvent: (event_id) => dispatch(leaveEvent(event_id)),
    removeEvent: (event_id) => dispatch(removeEvent(event_id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
