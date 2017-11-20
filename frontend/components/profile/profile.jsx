import React from 'react';
import { Link } from 'react-router-dom';
import EventIndex from '../events/event_index';
import isEmpty from 'lodash/isEmpty';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    debugger
  }

  componentDidMount() {
    if (this.props.user.city_id) {
      const { city_id } = this.props.user;
      this.props.fetchCity(city_id);
    }
  }

  render() {
    const { user, attendEvent, leaveEvent, removeEvent } = this.props;
    const { hosted_events } = user;
    let userCityText;
    let userHostText;
    let userAttendText;
    let pebcStyle;

    if (!user.city_id) {
      userCityText = "Currently, I don't have a home city. But just you wait...";
    } else {
      userCityText = `You can find me in ${user.city_name}.`;
    }

    if (!_.isEmpty(hosted_events)) {
      userHostText = (
        <div className="profile-events-container">
          <h3 className="user-info">These are the events I'm hosting...</h3>
          <EventIndex
            events={hosted_events}
            user={user}
            attendEvent={attendEvent}
            leaveEvent={leaveEvent}
            removeEvent={removeEvent}
            />
        </div>
      )
    } else {
      userHostText = "I'm currently not hosting any events.";
      pebcStyle = {
        marginBottom: '0.5em' 
      };
    }
    return (
      <div className="profile-body-container">
        <div className="update-button">
          <Link to="/update_profile">Update Your Profile</Link>
        </div>
        <div className="profile-container">
          <div className="user-profile-pic">
            <img src={user.image_url}
                 alt="user-photo"
                 className="profile-pic" />
          </div>
          <div className="profile">
            <h2 className="user-info"> Hi, I'm {user.first_name}.</h2>
            <h3 className="user-info">{userCityText}</h3>
            <div style={pebcStyle} className="profile-events-body-container">
              {userHostText}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
