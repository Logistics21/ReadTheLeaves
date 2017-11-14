import { connect } from 'react-redux';
import { leaveEvent, removeEvent, updateEvent } from '../../actions/events_actions';

import Dashboard from './dashboard';

const mapStateToProps = (state) => {
  debugger
  return ({
    currentUser: state.session.currentUser,
  });
};

const mapDispatchToProps = (dispatch) => {
  debugger
  return ({
    leaveEvent: (event_id, user_id) => dispatch(leaveEvent(event_id, user_id)),
    removeEvent: (event_id) => dispatch(removeEvent(event_id)),
    updateEvent: (event_id) => dispatch(updateEvent(event_id))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
