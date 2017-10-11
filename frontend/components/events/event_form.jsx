import React from 'react';
import { Link, history } from 'react-router-dom';
import moment from 'moment';
import DateTime from 'react-datetime';


class EventForm extends React.Component {
  constructor(props) {
    super(props);
    debugger
    this.state = this.props.eventStatus;
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getValidTimes = this.getValidTimes.bind(this);
  }

  componentWillMount() {
    if (!this.state.date) {
      this.setState({ date: moment()});
    }
  }

  getValidTimes(date) {
  // date is today, so only allow future times
    if (moment().isSame(date, 'day')) {
      return { minutes: { step: 30 } };
    }
  }

  onChange(newDateTime) {
    this.setState({ date: newDateTime });
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
    debugger
    let eventType;
    let defaultDate;
    if (this.props.formType === "/new_event") {
      eventType = `Create a New Event in ${this.state.city_name}`;
      defaultDate = moment();
    } else {
      eventType = "Update Event";
      defaultDate = this.state.date;
    }

    let yesterday = moment().subtract(1, 'day');
    let validDate = (defaultDate) => defaultDate.isAfter(yesterday);

    return (
      <div className="event-form-container">
        <form onSubmit={this.handleSubmit}>
          <h2>
            {eventType}
          </h2>
          <label>
            Pick a Day and Time:
            <div className="datetime-container">
              <DateTime
                className="datetime"
                value={ this.state.date }
                dateFormat="MMMM Do YYYY"
                timeConstraints={ this.getValidTimes(this.state.date) }
                isValidDate={ validDate }
                onChange={this.onChange}
              />
            </div>
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
