import React from 'react';
import { Link } from 'react-router-dom';
import EventIndex from '../events/event_index';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, attendEvent, leaveEvent } = this.props;
    const { attending_events, hosted_events } = user;

    return (
      <div className="profile-body-container">
        <div className="update-button">
          <Link to="/update_profile">Update Your Profile</Link>
        </div>
        <div className="profile-container">
          <h2 className="user-info"> Hi, I'm {user.first_name}.</h2>
          <img src={user.image_url}
               alt="user-photo"
               className="profile-pic" />
          <div className="profile">
            <h3 className="user-info">You can find me in {user.city_name}.</h3>
            <h3 className="user-info">These are the events I'm hosting...</h3>
          </div>
        </div>
        <div className="profile-events-body-container">
          <div className="profile-events-container">
            <EventIndex
              events={events}
              user={currentUser}
              attendEvent={attendEvent}
              leaveEvent={leaveEvent}
              removeEvent={removeEvent} />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
