import React from 'react';
import { Link } from 'react-router-dom';

class CitiesIndex extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.fetchCities();
  }

  render() {
    debugger
    // const cities =
    return (
      <div className="cities-container">
        <div className="cities-list-container">
          <div className="cities-header">
            <h2>Set your home city</h2>
            <p>
              Make sure you're the first to hear about Tea With Strangers
              updates relevant to you!
            </p>
            <div className="cities-list">
              <div className="cities-list-header">
                <h2>We're building our communities here 🏠</h2>
                <p>
                  You should be able to sign up for a tea time today!
                </p>
              </div>
              <div className="cities-section-container">
                <div className="cities-section-header">
                  <h2>We'll get here eventually ✈️</h2>
                  <p>
                    For now, find and set your home city. Well make sure you
                    know when we Tea With Strangers is coming your way!
                  </p>
                </div>
                <div className="cities-section-list-container">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default CitiesIndex;
