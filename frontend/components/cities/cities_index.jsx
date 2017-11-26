import React from 'react';
import { Link } from 'react-router-dom';
import CitiesIndexItem from './cities_index_item';
import isEmpty from 'lodash/isEmpty';

class CitiesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchCities();
  }

  render() {
    if (_.isEmpty(this.props.cities)) {
      return null;
    } else {
      const { cities } = this.props;
      const citieslist = Object.keys(cities).map(id => {
        return (
          <CitiesIndexItem key ={id} city={cities[id]} />
        )
      })

      return (
        <div className="cities-container">
          <div className="cities-list-container">
            <div className="cities-header-container">
              <h2 className="cities-title">Set your home city</h2>
              <p className="cities-p">
                Make sure you're the first to hear about Read The Leaves
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
                {citieslist}
              </div>
              <div className="cities-section-container">
                <div className="cities-partial">
                  <h2 className="cities-subtitle">We'll get here eventually ✈️</h2>
                  <p className="cities-section-p">
                    For now, find and set your home city. Well make sure you
                    know when we Read The Leaves is coming your way!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default CitiesIndex;
