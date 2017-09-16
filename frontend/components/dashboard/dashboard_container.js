import { connect } from 'react-redux';
import { leaveEvent } from '../../actions/events_actions';

import Dashboard from './dashboard';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    leaveEvent: (event_id) => dispatch(leaveEvent(event_id)),
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
