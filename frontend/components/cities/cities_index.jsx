import React from 'react';
import { Link } from 'react-router-dom';

import CitiesIndexItem from './cities_index_item';

class CitiesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCities();
  }

  render() {
    const cities = this.props.cities.map(city => {
      return (
        <CitiesIndexItem city={city} />
      );
    });

    return (
      <div className="cities-container">
        <div className="cities-list-container">
          <div className="cities-header-container">
            <h2 className="cities-title">Set your home city</h2>
            <p className="cities-p">
              Make sure you're the first to hear about Tea With Strangers
              updates relevant to you!
            </p>
          </div>
          <div className="cities-list">
            <div className="cities-partial">
              <h2 className="cities-subtitle">We're building our communities here 🏠</h2>
              <p className="cities-sub-p">
                You should be able to sign up for a tea time today!
              </p>
            </div>
            <div className="current-cities-container">
              {cities}
            </div>
            <div className="cities-section-container">
              <div className="cities-partial">
                <h2 className="cities-subtitle">We'll get here eventually ✈️</h2>
                <p className="cities-sub-p">
                  For now, find and set your home city. Well make sure you
                  know when we Tea With Strangers is coming your way!
                </p>
              </div>
              <div className="cities-section-list-container">
                <Link className="button">DON'T SEE YOUR CITY? ADD IT HERE!</Link>
                {this.suggestedCitiesList()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default CitiesIndex;
