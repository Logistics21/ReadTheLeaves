import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createEvent, updateEvent } from '../../actions/events_actions';

import EventForm from './event_form';

const mapStateToProps = ({ session, cities }, { location, match }) => {
  debugger
  const host = session.currentUser
  const formType = location.pathname;
  const city_id = host.city_id;
  const city = cities[city_id];
  let eventStatus;
  if (formType === "/new_event") {
    eventStatus = {
      date: undefined,
      address: '',
      description: '',
      city_id,
      spots: 5
    }
  } else {
    const event = city.events[match.params.event_id]
    eventStatus = {
      date: event.date,
      address: event.address,
      description: event.description,
      city_id: event.city_id,
      spots: event.spots
    }
  }

  return {
    currentUser: session.currentUser,
    city,
    eventStatus,
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
