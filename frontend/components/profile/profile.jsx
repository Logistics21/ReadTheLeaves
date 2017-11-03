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
      <div className="profile_container">
        <div>
          <Link to="/update_profile">Update Your Profile</Link>
          <div>
            <img src={user.image_url}
                 alt="user-photo"
                 className="profile-pic" />
          </div>
          <div className="profile">
            <h2 className="user-info"> Hi, I'm {user.first_name}.</h2>
          <h3 className="user-info">You can find me in {user.city_name}.</h3>
          </div>
        </div>
          <div className="user-events">
            <h3>These are the events I'm hosting...</h3>
          </div>
      </div>
    );
  }
}

export default Profile;
