import React from 'react';
import { Route, Link } from 'react-router-dom';
import EventFormContainer from '../events/event_form_container';
import EventIndex from '../events/event_index';

class CityDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.props.fetchCity(this.props.cityId).then(
      () => this.setState({loading: false}));
  }

  renderEventList() {
    const { currentUser, attendEvent, leaveEvent, removeEvent } = this.props;
    const { events } = this.props.city;

    return (
      <div>
        <EventIndex
          events={events}
          user={currentUser}
          attendEvent={attendEvent}
          leaveEvent={leaveEvent}
          removeEvent={removeEvent} />
      </div>
    );
  }

  // renderEventForm() {
  //   const { currentUser } = this.props;
  //
  //   if (!currentUser) {
  //     return (
  //       <Link
  //         className="host-button"
  //         to='/signup'>
  //         Sign up to host an Event in this City
  //       </Link>
  //     )
  //   } else if (!currentUser.city_id) {
  //     return (
  //       <Link
  //         to='/cities'
  //         className="host-button">
  //         Choose a Home City so you can host Events
  //       </Link>
  //     )
  //   }
  // }

  renderCityName() {
    return (
      <div className="city-name-container">
        <div className="city-image-filter"></div>
        <img className="city-image" src={this.props.city.image_url} />
        <div className="city-info-container">
          <h1 className="city-title">{this.props.city.name}</h1>
          <h3 className="get-tea">LET'S GET TEA!</h3>
        </div>
      </div>
    );
  }

  renderHasEvents() {
    if (this.props.city.events) {
      return (
        <div>
          <div className="tea-time-container">
            <h2 className="tea-time-title">
              Tea Time is a conversation between a few
              people who know nothing about each other.
            </h2>
            <p className="tea-time-p">
              You'll never leave without questions, new perspectives, and the
              reminder that we're far more the same than we are different.
            </p>
        </div>
      </div>
      );
    } else {
      return (
        <div className="tea-time-container">
          <h2 className="tea-time-title">
            There aren't any upcoming Tea Times!
          </h2>
          <p className="tea-time-p">
            We're working on getting some more up on the board! Sorry for any
            disappointment, but if you'd like, shoot us an email and we'll
            send it to the hosts to give em some inspiration.
          </p>
        </div>
      );
    }
  }

  renderCityAlert() {
    const { currentUser, city }  = this.props;
    const cityId = parseInt(this.props.cityId);

    if (!currentUser) {
      return (
        <div className="alert-container">
          <h6 className="home-sentence">
            You can set your city once you've signed up!
          </h6>
          <Link className="city-button" to="/signup">SIGN UP</Link>
            <Link
              className="redirect-link"
              onClick={() => this.props.clearErrors()}
              to="/signin">
              Log in if you've signed up before
            </Link>
        </div>
      );
    } else if (!currentUser.city_id) {
      return (
        <div className="alert-container">
          <h6 className="home-sentence">
            You have no home city yet!
          </h6>
          <Link
            className="city-button"
            onClick={() => this.props.userQuickUpdate(currentUser, city)}
            to={`/cities/${cityId}`}>
            Make {city.city_code.toUpperCase()} Your Home.
          </Link>
        </div>
      );
    } else if (currentUser.city_id === cityId) {
      return (
        <div className="alert-container">
          <div className="change-city-container">
            <h6 className="change-small">
              <strong>This is your home city!</strong> If you've moved,
              <Link
                className="city-change"
                to="/cities">change your home city here.
              </Link>
          </h6>
            <h6 className="change-small">OR</h6>
            <Link
              className="city-button"
              to="/new_event">
              CLICK HERE TO HOST AN EVENT IN {city.city_code.toUpperCase()}
            </Link>
          </div>
        </div>
      );
    } else if (currentUser.city_id !== cityId) {
      return (
        <div className="alert-container">
          <h6 className="home-sentence">
            Do you live in {city.city_code.toUpperCase()} now?
          </h6>
          <span
            data-descr={`Make ${city.city_code} Your Home`}>
            <Link
              className="city-button"
              onClick={() => this.props.userQuickUpdate(currentUser, city)}
              to={`/cities/${cityId}`}>YUP!
            </Link>
          </span>
          <h6 className="set-city">
            <Link
              className="home-link"
              to={`/cities/${currentUser.city_id}`}>
              {currentUser.city_name}
          </Link> is your home city right now. The big button will change that!</h6>
        </div>
      );
    }
  }

  render() {
    if (this.state.loading) {
      return null;
    } else {
      return (
        <div className="city-detail-container">
          {this.renderCityName()}
          <div className="city-detail-body-container">
            {this.renderHasEvents()}
            {this.renderCityAlert()}
            {this.renderEventList()}
          </div>
        </div>
      );
    }
  }
}


export default CityDetail;
