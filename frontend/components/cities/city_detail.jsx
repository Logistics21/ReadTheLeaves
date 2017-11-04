import React from 'react';
import { Route, Link } from 'react-router-dom';
import EventFormContainer from '../events/event_form_container';
import EventIndex from '../events/event_index';

class CityDetail extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.state = { loading: true };
  }

  componentDidMount() {
    // // debugger
    this.props.fetchCity(this.props.cityId).then(
      () => this.setState({loading: false}));
  }

  renderEventList() {
    const { events, currentUser, attendEvent, leaveEvent, removeEvent } = this.props;

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

  renderEventForm() {
    const { currentUser } = this.props;

    if (!currentUser) {
      return (
        <Link to='/signup'>Sign up to host an Event in your City</Link>
        )
    } else {
      return (
        <Link to={{
          pathname: '/new_event',
          state: { cityId: this.props.cityId }
        }}>Click here to host an Event in this City</Link>
      )
    }
  }

  renderCityName() {
    return (
      <div className="city-name-container">
        <div className="city-image-container"></div>
        <img className="city-image" src={this.props.city.image_url} />
        <div className="city-head-container">
          <h1 className="city-title">{this.props.city.name}</h1>
          <h3 className="get-tea">LET'S GET TEA!</h3>
        </div>
      </div>
    );
  }

  renderCurrentUsers() {
    if (this.props.users) {
      const users = this.props.users.map((user, idx) => {
        return (
          <div className="current-host-container" key={idx}>
            <h2>{user.first_name}</h2>
          </div>
        );
      });

      return users
    } else {
      return null;
    }
  }


  pastHosts() {
    return (
      <div className="past-host-list-container">
        <div className="past-host">
          Shiv Jillian Misha Kyle Nou Owen Yohan
          Willie Alex Sophia Shumita Joel Claire
        </div>
      </div>
    );
  }

  renderHasEvents() {
    if (!this.props.events) {
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

  renderPastHosts() {
    return (
      <div className="past-hosts-container">
        <h2 className="past-host-title">Hosts we've missed!</h2>
        <p className="past-host-p">
          Every host in the community has played a huge role in making this
          movement come to life. You might not have seen tea times from these
          hosts in a bit, but without them, Read the Leaves in {this.props.city.name} wouldn't be where it is today.
        </p>
        {this.pastHosts()}
      </div>
    );
  }

  renderCurrentHosts() {
    if (this.props.host) {
      const hosts = this.props.hosts.map( (host, idx) => {
        return (
          <div className="current-host-container" key={idx}>
            <img src={host.image_url}/>
            <h2>{host.first_name}</h2>
          </div>
        );
      });

      return (
        <div className="hosts-container">
          <div className="hosts-stories">
            <h2 className="host-title">
              The Host Community is full of amazing stories.
            </h2>
            <p className="host-p">
              How else would someone end up regularly bringing strangers together
              for conversations? Before each of them were invited to community,
              they were attendees that fed their tea times with their questions,
              open-mindedness, and presence.
            </p>
          </div>
          <div className="current-hosts-container">
            {hosts}
          </div>
          {this.renderPastHosts()}
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
    } else if (currentUser.city_id === cityId && currentUser.is_host) {
      return (
        <div className="alert-container">
          <Link
            className="city-button"
            to="/new_event">
            CLICK HERE TO HOST AN EVENT IN {city.city_code.toUpperCase()}
          </Link>
        </div>
      );
    } else if (currentUser.city_id === cityId && !currentUser.is_host) {
      return (
        <div className="alert-container">
          <div className="change-city-container">
            <h6 className="change-home">
              This is your home city! </h6>
            <h6 className="change-small">If you've moved, </h6>
            <Link
              className="city-change"
              to="/cities"> change your home city here.
            </Link>
          </div>
        </div>
      );
    } else if (currentUser.city_id && currentUser.city_id !== cityId) {
      return (
        <div className="alert-container">
          <h6 className="home-sentence">
            Do you live in {city.city_code.toUpperCase()} now?
          </h6>
          <Link
            className="city-button"
            onClick={() => this.props.userQuickUpdate(currentUser, city)}
            to={`/cities/${cityId}`}>
            YUP!
          </Link>
          <h6 className="set-city">
            <Link
              className="home-link"
              to={`/cities/${currentUser.city_id}`}>
              {currentUser.city_name}
          </Link> is your home city right now. The big button will change that!</h6>
        </div>
      );
    } else {
      return (
        <div className="alert-container">
          <h6 className="home-sentence">
            You have no home city yet!
          </h6>
          <Link className="city-button" to='/update_profile'>
            Click Here to Update Your Profile
          </Link>
        </div>
      );
    }
  }

  render() {
    // // debugger
    if (this.state.loading) {
      return null;
    } else {
      return (
        <div className="city-detail-container">
          {this.renderCityName()}
          <div className="city-detail-body-container">
            {this.renderEventForm()}
            {this.renderHasEvents()}
            {this.renderCityAlert()}
            {this.renderEventList()}
            {this.renderCurrentHosts()}
          </div>
        </div>
      );
    }
  }
}


export default CityDetail;
