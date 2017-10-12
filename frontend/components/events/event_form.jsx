import React from 'react';
import { Link, history } from 'react-router-dom';
import moment from 'moment';
import DateTime from 'react-datetime';


class EventForm extends React.Component {
  constructor(props) {
    super(props);
    // debugger
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

  getValidTimes(dateTime) {
    // date is today, so only allow future times
    if (moment().isSame(dateTime, 'day')) {
      return {
        hours: {
          min: dateTime.hours(),
          max: 23,
          step: 1,
        },
        minutes: {
          min: dateTime.minutes(),
          max: 59,
          step: 5,
        },
      };
    }

    // date is in the future, so allow all times
    return {
      hours: {
        min: 0,
        max: 23,
        step: 1,
      },
      minutes: {
        min: 0,
        max: 59,
        step: 5,
      },
    };
  }

  onChange(newDateTime) {
    this.setState({ date: newDateTime });
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    let event = this.state;
    this.state.date = this.state.date._d;

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
    // debugger
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
        <form
          className="event-form"
          onSubmit={this.handleSubmit}>
          <h2 className="event-title">{eventType}</h2>
          <label className="form-data">
              Pick a Location 🏙️:
          </label>
            <input
              type='text'
              placeholder="Enter an Address..."
              onChange={this.update("address")}
              />
          <label className="form-data">
            Pick a Day and Time 🕒:
          </label>
            <div className="datetime-container">
              <DateTime
                className="datetime"
                value={this.state.date}
                dateFormat="MMMM Do YYYY"
                timeConstraints={this.getValidTimes(this.state.date)}
                isValidDate={validDate}
                onChange={this.onChange}
                open={true}
              />
            </div>
          <button className="button event-button" type="submit">
            {eventType}
          </button>
        </form>
      </div>
    )
  }
}

export default EventForm;
