import React from 'react';
import SignUpContainer from './signup/signup_container';
import SignInContainer from './signup/signin_container';
import MainPageContainer from './mainpage/mainpage_container';
import NavBarContainer from './navbar/navbar_container';
import Footer from './footer/footer';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
const App = () => (
  <div>
    <NavBarContainer />
    <div className="main-content">
      <Switch>
        <AuthRoute path="/signup" component={SignUpContainer} />
        <AuthRoute path="/signin" component={SignInContainer} />
        <Route exact path="/" component={MainPageContainer} />
      </Switch>
    </div>
    <Footer />
  </div>
);

export default App;
