import { connect } from 'react-redux';
import { attendEvent, leaveEvent } from '../../actions/events_actions';

import Profile from './profile';
//
const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attendEvent: (event_id) => dispatch(attendEvent(id)),
    leaveEvent: (event_id) => dispatch(leaveEvent(event_id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
