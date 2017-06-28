import React from 'react';
import { Route, Link } from 'react-router-dom';

class CityDetail extends React.Component {
  constructor(props) {
    super(props);
    this.id = parseInt(this.props.match.params.id);
  }

  componentDidMount() {
    this.props.fetchCity(this.id);
  }

  renderCityName() {
    return (
      <div className="city-name-container">
        <h1 className="city-title">{this.props.city.name}</h1>
        <h3 className="get-tea">LET'S GET TEA!</h3>
      </div>
    );
  }

  pastHosts() {
    return (
      [
        "Shiv", "Jillian","Misha", "Kyle","Nou", "Owen", "Yohan",
        "Willie", "Alex", "Sophia", "Shumita", "Joel", "Claire"
      ]
    );
  }

  renderHasEvents() {
    if (this.props.city.events !== undefined) {
      return (
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
          hosts in a bit, but without them, Tea With Strangers in New York
          City wouldn't be where it is today.
        </p>
        {this.pastHosts()}
      </div>
    );
  }

  renderCurrentHosts() {
    const hosts = this.props.city.hosts.map( (host, idx) => {
      return (
        <li key={idx} className="current-hosts-container">
          <h2>{host.first_name}</h2>
        </li>
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
        {hosts}
        {this.renderPastHosts()}
      </div>
    );
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.
  // }

  renderCityAlert() {
    const user = this.props.currentUser;
    debugger
    if (!user) {
      return (
        <Link className="city-button" to="/signup">SIGN UP</Link>
      );
    } else if (user.city_id === this.id && user.is_host) {
      return (
        <Link className="city-button" to="/hosting">CLICK HERE TO HOST AN EVENT IN {this.props.city.city_code.toUpperCase()}</Link>
      );
    } else if (user.city_id === this.id && !user.is_host) {
      return (
        <div>
          <h4>This is your home city! If you've moved</h4>
          <Link className="city-button" to="/cities">change your home city here.</Link>
        </div>
      );
    } else {
      return (
        <div>
          <h4>You have no home city yet!</h4>
          <Link className="city-button" to="/cities">SET {this.props.city.name.toUpperCase()} AS MY HOME CITY</Link>
        </div>
      );
    }
  }

  render() {
    debugger
    return (
      <div className="city-detail-container">
        {this.renderCityName()}
        {this.renderCityAlert()}
        {this.renderHasEvents()}
        {this.renderCurrentHosts()}
    </div>
    );
  }
}


export default CityDetail;



//   <div className="events-container">
//     null
//   </div>
//     {this.renderCurrentHosts()}
//   </div>
