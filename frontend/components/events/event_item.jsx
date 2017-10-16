import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class EventItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttend = this.handleAttend.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.hostCancelEvent = this.hostCancelEvent.bind(this);
    this.hostUpdateEvent = this.hostUpdateEvent.bind(this);
    this.state = { spots: this.props.event.spots }
  }

  handleAttend(e) {
    e.preventDefault();
    const { event, attendEvent } = this.props;
    attendEvent(event.id).then(() => this.setState({ spots:
    this.state.spots - 1 }));
  }

  handleLeave(e) {
    e.preventDefault();
    const { event, currentUser, leaveEvent } = this.props;
    leaveEvent(event.id).then(() => this.setState({ spots:
    this.state.spots + 1 }));
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
    const { event, currentUser } = this.props;
    let attendButton;
    if (event.host_id === currentUser.id) {
      attendButton = (
        <div>
          <button onClick={this.hostUpdateEvent}>Edit</button>
          <button onClick={this.hostCancelEvent}>Cancel</button>
        </div>
      );
    } else if (this.state.spots < 1 &&
             !(currentUser.attending_events.includes(event.id))) {
      attendButton = (
        <button>
          Sorry All Full!
        </button>
      )
    } else if (!(currentUser.attending_events.includes(event.id))) {
      attendButton = (
        <button onClick={this.handleAttend}>Join</button>
      );
    } else {
      attendButton = (
        <button onClick={this.handleLeave}>Leave</button>
      );
    }

    let displaySpotsLeft;
    if (this.state.spots < 1) {
      displaySpotsLeft = (
        <h3>Full!</h3>
      );
    } else if (this.state.spots === 1) {
      displaySpotsLeft = (
        <h3>1 Spot Left</h3>
      );
    } else {
      displaySpotsLeft = (
        <h3>{this.state.spots} Spots Left</h3>
      );
    }

    return (
      <div className="event-item-container">
        <div className="event-item-header">
          <div className="date-time">
            <h3>{event.day}</h3>
            <h3>{event.date}</h3>
            <h3>{event.time}</h3>
          <div>
            <div className="host">
              <h3>Your Host is:</h3>
              <Link to={`/profile/${event.host_id}`}>
                <img className="host-event-pic"
                     src={event.image_url}
                  />
                <h3>{event.host_name}</h3>
              </Link>
            </div>
          </div>
        </div>

        <div className="event-item-body">
          <div className="event-location">
            <h4>{event.address}</h4>
          </div>
        </div>

        <div className="event-spots-container">
          <div className="event-spots-left">
            {displaySpotsLeft}
            <div className="event-spots"
                 style={{width: 100 - (`${this.state.spots}` * 20) + '%'}}>
            </div>
          </div>
        </div>

        <div className="attend-button">
          {attendButton}
        </div>
      </div>
    </div>
  );
  }
}

export default withRouter(EventItem);
