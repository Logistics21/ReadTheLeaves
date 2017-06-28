import React from 'react';
import { Link } from 'react-router-dom';

const CitiesIndexItem = ({ city }) => {
  return (
    <div key={city.id}>
      <Link to={`/cities/${city.id}`} className="city-photo">
        <div className="bg-overlay"></div>
        <h2 className="city-name">{city.name}</h2>
        <img className="city-index-image" src={window.images.sf} />
      </Link>
    </div>
  );
};

export default CitiesIndexItem;
