import React from 'react';

class EventItem extends React.Component {
  constructor(props) {
    super(props);
    debugger
    this.attendEvent = this.attendEvent.bind(this);
    this.leaveEvent = this.leaveEvent.bind(this);
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
    // const { }
  }

  hostUpdateEvent(e) {
    e.preventDefault();

  }

  render() {
    return (
      <h1>Event Item</h1>
    )
  }
}

export default EventItem;
