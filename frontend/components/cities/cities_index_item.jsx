import React from 'react';
import { Link } from 'react-router-dom';

const suggestedCities = [
  "Toronto", "Jersey City", "Philadelphia", "Duke University", "Seattle",
  "Princeton", "Chattanooga", "Austin", "Harvard", "Portland", "Nairobi",
  "UPenn", "Stanford", "Berlin", "Miami", "San Diego", "Cambridge", "UK",
  "Detroit", "Mumbai", "Paris", "Amman", "Osaka", "Tokyo", "Yoshino"
]

suggestedCitiesList = () => {
  const list = suggestedCities.map(city, idx => {
    return <li key={idx}><Link to="/suggestedcity">{city}</Link></li>
  })
  return (
    <ul>{list}</ul>
  )
}

const CitiesIndexItem = ({ city }) => {
  return (
    <div key={city.id} className="city-photo">
      <Link to={`cities/${city.id}`}>City Picture Here</Link>
      <h2 className="city-name">{city.name}</h2>
    </div>
  )
}

export default CitiesIndexItem;
