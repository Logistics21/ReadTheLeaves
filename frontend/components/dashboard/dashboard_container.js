import { connect } from 'react-redux';
import { leaveEvent, removeEvent } from '../../actions/users_actions';

import Dashboard from './dashboard';

const mapStateToProps = ({ session }) => {
  return ({
    currentUser: session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    leaveEvent: (event_id, user_id) => dispatch(leaveEvent(event_id, user_id)),
    removeEvent: (event_id) => dispatch(removeEvent(event_id))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
