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

  cities() {
    return (
      [
        "Toronto", "Jersey City", "Philadelphia", "Duke University", "Seattle",
        "Princeton", "Chattanooga", "Austin", "Harvard", "Portland", "Nairobi",
        "UPenn", "Stanford", "Berlin", "Miami", "San Diego", "Cambridge, UK",
        "Detroit", "Mumbai", "Paris", "Amman", "Osaka", "Tokyo", "Yoshino"
      ]
    );
  }
  cityList() {
    const list = this.cities().map( (city, idx) => {
      return (
        <li className="suggest-city-list-item" key={idx}>
          <Link to="/cities" className="suggested-city">{city}</Link>
        </li>
      );
    });

    return <ul className="suggest-city-list">{list}</ul>;
  }

  render() {
    const cities = this.props.cities.map(city => {
      return (
        <CitiesIndexItem key = {city.id} city={city} />
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
                <p className="cities-section-p">
                  For now, find and set your home city. Well make sure you
                  know when we Tea With Strangers is coming your way!
                </p>
              </div>
              <div className="cities-section-list-container">
                <Link className="button" to="/suggestcities">DON'T SEE YOUR CITY? ADD IT HERE!</Link>
                <div className="suggested-list">
                  {this.cityList()}
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
