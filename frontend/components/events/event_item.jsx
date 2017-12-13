import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class EventItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttend = this.handleAttend.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.hostCancelEvent = this.hostCancelEvent.bind(this);
    this.hostUpdateEvent = this.hostUpdateEvent.bind(this);

    const spots = this.props.event.attendees ?
      this.props.event.spots - this.props.event.attendees.length
    : this.props.event.spots;

    this.state = { spots: spots };
  }

  handleAttend(e) {
    e.preventDefault();
    const { user, event, attendEvent } = this.props;
    attendEvent(event, user).then(() => this.setState({ spots: this.state.spots - 1 }));
  }

  handleLeave(e) {
    e.preventDefault();
    const { user, event, leaveEvent } = this.props;
    leaveEvent(event.id, user.id).then(() => this.setState({ spots: this.state.spots + 1 }));
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
    const { event, user } = this.props;
    let attendButton;
    const dateArray = event.date_info.replace(/\s\s+/g, ' ').split(" ");
    const dateObj = {
      day: dateArray[0],
      month: dateArray[1],
      date: dateArray[2],
      year: dateArray[3],
      time: dateArray[4],
      period: dateArray[5]
    }

    if (!user) {
      attendButton = (
        <div>
          <Link className="event-item-button" to='/signup'>Sign Up Before You Join</Link>
        </div>
      );
    } else if (!user.attending_events) {
        user.attending_events = {};
    } else if (event.host_id === user.id) {
      attendButton = (
        <div>
          <button className="event-item-button" onClick={this.hostUpdateEvent}>Edit</button>
          <button className="event-item-button" onClick={this.hostCancelEvent}>Cancel</button>
        </div>
      );
    } else if (this.state.spots < 1 &&
             !(event.id in user.attending_events)) {
      attendButton = (
        <button style={{cursor: 'not-allowed'}} className="event-item-button">
          Sorry All Full!
        </button>
      )
    } else if (!(event.id in user.attending_events)) {
      attendButton = (
        <button className="event-item-button" onClick={this.handleAttend}>Join</button>
      );
    } else {
      attendButton = (
        <button className="event-item-button" onClick={this.handleLeave}>Leave</button>
      );
    }

    let displaySpotsLeft;
    if (this.state.spots < 1) {
      displaySpotsLeft = "Full!"
    } else if (this.state.spots === 1) {
      displaySpotsLeft = "1 Spot Left";
    } else {
      displaySpotsLeft = `${this.state.spots} Spots Left`;
    }

    return (
      <div className="event-item-container">
        <div className="event-item-head">
          <div className="date-time">
            <h3>{dateObj.day}</h3>
            <h3>{dateObj.month} {dateObj.date}</h3>
            <h3>{dateObj.year}</h3>
            <h3>{dateObj.time}{dateObj.period}</h3>
          </div>
          <div className="host">
            <h3 className="event-host">Your Host is:</h3>
            <Link className="host-link" to={`/profile/${event.host_id}`}>
              <img className="host-pic"
                   src={event.host_image}
                   alt="host-photo" />
            </Link>
            <h3 className="host-name">{event.host_name}</h3>
          </div>
        </div>

        <div className="event-location">
          <h4>Location:</h4>
          <h4>{event.address}</h4>
          <h4>{event.city}</h4>
        </div>

        <div className="event-spots-container">
          <h3 className="spots-left">{displaySpotsLeft}</h3>
          <div className="event-spots">
            <div className="spots-left" style={{width: 100 - (`${this.state.spots}` * 20) + '%'}}>
            </div>
          </div>
        </div>

        <div className="attend-button">{attendButton}</div>
      </div>
    );
  }
}

export default withRouter(EventItem);
