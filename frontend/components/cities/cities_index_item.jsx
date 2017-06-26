import React from 'react';
import { Link } from 'react-router-dom';

const CitiesIndexItem = ({ city }) => {
  return (
    <div key={city.id} className="city-photo">
      <Link to={`cities/${city.id}`}>City Picture Here</Link>
      <h2 className="city-name">{city.name}</h2>
    </div>
  );
};

export default CitiesIndexItem;
