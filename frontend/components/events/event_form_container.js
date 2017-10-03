import { connect } from 'react-redux';
import { createEvent, updateEvent } from '../../actions/events_actions';
import EventForm from './event_form';

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: (event) => dispatch(createEvent(event)),
    updateEvent: (event) => dispatch(updateEvent(event)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
