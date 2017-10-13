import React from 'react';
import { withRouter } from 'react-router-dom';

class EventItem extends React.Component {
  constructor(props) {
    super(props);
    debugger
    this.handleAttend = this.handleAttend.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.hostCancelEvent = this.hostCancelEvent.bind(this);
    this.hostUpdateEvent = this.hostUpdateEvent.bind(this);
    this.state = {
      spots: this.props.event.spots
    }

  }

  handleAttend(e) {
    e.preventDefault();
    const { event, attendEvent } = this.props;
    attendEvent(event.id).then(() => this.setState({ spots:
    this.state.event.spots - 1 }));
  }

  handleLeave(e) {
    e.preventDefault();
    const { event, currentUser, leaveEvent } = this.props;
    leaveEvent(event.id).then(() => this.setState({ spots:
    this.state.event.spots + 1 }));
  }

  hostCancelEvent(e) {
    e.preventDefault();
    const { event, removeEvent } = this.props;
    return removeEvent(event.id);
  }

  hostUpdateEvent(e) {
    e.preventDefault();
    const { event } = this.props;
    this.props.history.push(`/update_event/${event.id}`)
  }

  render() {
    let attendButton;
    const { event, currentUser } = this.props;
    if (event.host_id === currentUser.id) {
      <div>
        <button onClick={this.hostUpdateEvent}>Edit</button>
        <button onClick={this.hostCancelEvent}>Cancel</button>
      </div>
    } else if (this.state.spots < 1 && !true) {
      attendButton = (
        <button>
          Sorry All Full!
        </button>
      )
    // } else if (!) {
    //   attendButton=(<button></button>)
    } else {
      attendButton = (
        <button>Leave</button>
      )
    }
  }
}

export default withRouter(EventItem);
