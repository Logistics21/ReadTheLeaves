import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  render() {
    const { currentUser, leaveEvent } = this.props;
    return (
      <div className="dashboard-body-container">
        <div className="dashboard-container">
          <h1 className="dashboard-title">Dashboard</h1>
          <h2 className="user-name">Hello, {currentUser.first_name}</h2>
          <div className="update-button">
            <Link to='/update_profile'>
              <h3>Update Your Profile</h3>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
