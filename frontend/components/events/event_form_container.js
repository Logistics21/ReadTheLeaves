import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createEvent, updateEvent } from '../../actions/events_actions';

import EventForm from './event_form';

// const mapStateToProps = ({ session, cities }, { location, match }) => {
const mapStateToProps = (state, { match, location }) => {
  debugger
  const host = state.session.currentUser
  const formType = location.pathname;
  let city_name;
  let city_id;

  if (state.city.id) {
    city_name = state.city.name;
    city_id = state.city.id;
  } else {
    city_name = host.city_name;
    city_id = host.city_id;
  }

  let eventStatus;
  if (formType === "/new_event") {
    eventStatus = {
      date: undefined,
      address: '',
      description: '',
      city_id,
      city_name,
      spots: 5
    }
  } else {
    const event = host.events[match.params.event_id]

    eventStatus = {
      date: event.date,
      address: event.address,
      description: event.description,
      city_id: event.city_id,
      spots: event.spots
    }
  }

  return {
    host,
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
