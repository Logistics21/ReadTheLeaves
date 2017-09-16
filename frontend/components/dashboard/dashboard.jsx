import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  render() {
    const { currentUser, leaveEvent } = this.props;
    return (
      <div>
        <h1>Dashboard</h1>
        <h2>Hello, {currentUser.first_name}</h2>
        <div>
          <Link to='/update_profile'>
            <h3>Update Your Profile</h3>
          </Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;
