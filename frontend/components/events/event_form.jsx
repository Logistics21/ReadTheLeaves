import React from 'react';
import { Link, history } from 'react-router-dom';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    debugger
    this.state = this.props.eventStatus;
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange() {

  }

  handleSubmit(e) {
    e.preventDefault();
    const event = this.state;

    if (this.props.formType === "/new_event") {
      this.props.createEvent(event)
                .then(() => this.props.history
                .push(this.state.cityId));
    } else {
      this.props.updateEvent(event)
                .then(() => this.props.history
                .push(this.state.cityId));

    }
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  render() {
    let eventType;
    let defaultDate;
    if (this.props.formType === "/new_event") {
      eventType = `Create a New Event in ${this.props.city.name}`;
      defaultDate = Date.now();
    } else {
      eventType = "Update Event";
      defaultDate = Date.parse(this.state.date);
    }

    return (
      <div>
        <h1>EventForm</h1>
        <form onSubmit={this.handleSubmit}>
          <h2>
            {eventType}
          </h2>
          <label>

          </label>
          <button className="button" type="submit">
            {eventType}
          </button>
        </form>
      </div>
    )
  }
}

export default EventForm;
