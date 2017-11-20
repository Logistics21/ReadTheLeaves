import { connect } from 'react-redux';
import {
  attendEvent, leaveEvent,
  removeEvent, fetchUser
} from '../../actions/users_actions';

import Profile from './profile';

const mapStateToProps = ({ session, user }) => {
  debugger
  return {
    currentUser: session.currentUser,
    user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attendEvent: (event, user) => dispatch(attendEvent(event, user)),
    leaveEvent: (event_id) => dispatch(leaveEvent(event_id)),
    removeEvent: (event_id) => dispatch(removeEvent(event_id)),
    fetchUser: (id) => dispatch(fetchUser(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
