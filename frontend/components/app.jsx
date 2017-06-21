import React from 'react';
// import NavBarContainer from './navbar/navbar_container';
import SignUpContainer from './signup/signup_container';
import Footer from './footer/footer';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
const App = () => (
  <div>
    <h1>See Your Future</h1>
  </div>
  <div>
    <AuthRoute path="/sign" component={SignUpContainer} />
  </div>
  <div>
    <div className="footer">
      <Footer />
    </div>
  </div>
);

export default App;

// <header>
  // <NavBarContainer />
// </header>
