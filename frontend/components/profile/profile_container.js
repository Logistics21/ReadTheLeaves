import { connect } from 'react-redux';
import { leaveEvent, removeEvent } from '../../actions/users_actions';
import { fetchCity } from '../../actions/cities_actions';

import Profile from './profile';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    leaveEvent: (event_id) => dispatch(leaveEvent(event_id)),
    removeEvent: (event_id) => dispatch(removeEvent(event_id)),
    fetchCity: (id) => dispatch(fetchCity(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
