import React from 'react';
import { Link } from 'react-router-dom';
import EventIndex from '../events/event_index';
import isEmpty from 'lodash/isEmpty';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      match: this.props.currentUser.id ===
             parseInt(this.props.match.params.id)
    }
  }

  componentDidMount() {
    const { currentUser, user } = this.props;
    const id = this.props.match.params.id;

    if (!this.state.match) {
      if (_.isEmpty(user) || user.id !== parseInt(id)) {
        this.props.fetchUser(id);
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    const { currentUser } = this.props;
    const id = nextProps.match.params.id;

    if (currentUser.id === parseInt(id)) {
      this.setState({ match: true });
    } else {
      this.setState({ match: false });
    }
  }

  render() {
    let profile;
    const { currentUser, user } = this.props;

    if (this.state.match) {
      profile = currentUser;
    } else {
      profile = user;
    }

    if (_.isEmpty(profile)) {
      return null;
    } else {
      const { currentUser, attendEvent, leaveEvent, removeEvent } = this.props;
      const { hosted_events } = profile;
      let userCityText, userHostText, userAttendText, pebcStyle, updateButton;

      if (!profile.city_id) {
        userCityText = "Currently, I don't have a home city. But just you wait...";
      } else {
        userCityText = `You can find me in ${profile.city_name}.`;
      }

      if (this.state.match) {
        updateButton = (
          <Link className="update-button" to="/update_profile">Update Your Profile</Link>
        )
      }

      if (!_.isEmpty(hosted_events)) {
        userHostText = (
          <div className="profile-events-container">
            <h3 className="user-info">These are the events I'm hosting...</h3>
            <EventIndex
              events={hosted_events}
              user={currentUser}
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
          {updateButton}
          <div className="profile-container">
            <div className="user-profile-pic">
              <img src={profile.image_url}
                   alt="user-photo"
                   className="profile-pic" />
            </div>
            <div className="profile">
              <h2 className="user-info"> Hi, I'm {profile.first_name}.</h2>
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
}

export default Profile;
