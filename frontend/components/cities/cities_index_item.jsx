import React from 'react';
import { Link } from 'react-router-dom';

const CitiesIndexItem = ({ city }) => {
  return (
    <div key={city.id}>
      <Link to={`/cities/${city.id}`} className="city-photo">
        <h2 className="city-name">{city.name}</h2>
        <div className="city_image">
          <img className="city-index-image" src={city.image_url} />
        </div>
      </Link>
    </div>
  );
};

export default CitiesIndexItem;
