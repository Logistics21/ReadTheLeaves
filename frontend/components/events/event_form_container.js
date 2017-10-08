import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createEvent, updateEvent } from '../../actions/events_actions';

import EventForm from './event_form';

const mapStateToProps = ({ session, cities }, { location }) => {
  const host = session.currentUser
  const formType = location.pathname;
  const city = cities[location.state[cityId]];
  if (formType === "new_event") {
    let eventStatus = {
      date: undefined,
      address: '',
      host_id: host.id,
      city_id: location.state[cityId]
    }
  }
  return {
    currentUser: state.session.currentUser,
    city,
    stateEvent,
    formType
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: (event) => dispatch(createEvent(event)),
    updateEvent: (event) => dispatch(updateEvent(event)),
  }
}

export default withRouter(
  connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm));
