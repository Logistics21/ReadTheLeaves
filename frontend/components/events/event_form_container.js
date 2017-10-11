import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createEvent, updateEvent } from '../../actions/events_actions';

import EventForm from './event_form';

const mapStateToProps = ({ session, cities }, { location }) => {
  const host = session.currentUser
  const formType = location.pathname;
  const cityId = location.state ? location.state.cityId : host.city_id;
  const city = cities[cityId];
  let eventStatus;
  if (formType === "/new_event") {
    eventStatus = {
      date: undefined,
      address: '',
      host_id: host.id,
      cityId,
      city_name: host.city_name
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
