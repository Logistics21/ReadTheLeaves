import React from 'react';
import { Link } from 'react-router-dom';

renderCityAlert(city, user) {
  if (!user) {
    return (
      <Link className="city-button" to="/signup">SIGN UP</Link>
    );
  } else if (user.city_id === city.id && user.is_host) {
    return (
      <Link
        className="city-button"
        to="/hosting">
        CLICK HERE TO HOST AN EVENT IN {city.city_code.toUpperCase()}
      </Link>
    );
  } else if (user.city_id === city.id && !user.is_host) {
    return (
      <div>
        <h4>This is your home city! If you've moved</h4>
        <Link
          className="city-button"
          to="/cities">
          change your home city here.
        </Link>
      </div>
    );
  } else if (user.city_id !== city.id) {
    return (
      <div>
        <h4>Do you live in {city.city_code.toUpperCase()} now?</h4>
        <Link
          className="city-button"
          to="/cities">
          {user.city_code} is your home city right now. The big button will change that!
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <h4>You have no home city yet!</h4>
        <Link
          className="city-button"
          onClick={() => city.props.updateUserCity(user, city.id)}
          to={`/cities/${city.id}`}>
          SET {city.props.city.name.toUpperCase()} AS MY HOME CITY
        </Link>
      </div>
    );
  }
}


// renderCityAlert() {
//   const user = this.props.currentUser;
//   if (!user) {
//     return (
//       <Link className="city-button" to="/signup">SIGN UP</Link>
//     );
//   } else if (user.city_id === this.id && user.is_host) {
//     return (
//       <Link
//         className="city-button"
//         to="/hosting">
//         CLICK HERE TO HOST AN EVENT IN {this.props.city.city_code.toUpperCase()}
//       </Link>
//     );
//   } else if (user.city_id === this.id && !user.is_host) {
//     return (
//       <div>
//         <h4>This is your home city! If you've moved</h4>
//         <Link className="city-button" to="/cities">change your home city here.</Link>
//       </div>
//     );
//   } else if (user.city_id !== this.id) {
//     return (
//       <div>
//         <h4>Do you live in {this.props.city.city_code.toUpperCase()} now?</h4>
//         <Link
//           className="city-button"
//           to="/cities">
//           {user.city_code} is your home city right now. The big button will change that!
//         </Link>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <h4>You have no home city yet!</h4>
//         <Link
//           className="city-button"
//           onClick={() => this.props.updateUserCity(user, this.id)}
//           to={`/cities/${this.id}`}>
//           SET {this.props.city.name.toUpperCase()} AS MY HOME CITY
//         </Link>
//       </div>
//     );
//   }
// }
