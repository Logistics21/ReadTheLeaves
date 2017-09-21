import React from 'react';
import SignUpContainer from './signup/signup_container';
import SignInContainer from './signup/signin_container';
import MainPageContainer from './mainpage/mainpage_container';
import NavBarContainer from './navbar/navbar_container';
import CitiesIndexContainer from './cities/cities_index_container';
import CitiesDetailContainer from './cities/cities_detail_container';
import DashboardContainer from './dashboard/dashboard_container';
import ProfileContainer from './profile/profile_form_container';
import Footer from './footer/footer';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div className="main-content">
    <NavBarContainer />
    <div className="body-content">
      <Switch>
        <AuthRoute path="/signup" component={SignUpContainer} />
        <AuthRoute path="/signin" component={SignInContainer} />
        <Route exact path="/" component={MainPageContainer} />
        <Route exact path="/cities" component={CitiesIndexContainer} />
        { <Route path="/cities/:id" component={CitiesDetailContainer} /> }
        <Route path="/dashboard" component={DashboardContainer} />
        <Route path="/update_profile" component={ProfileContainer} />
      </Switch>
    </div>
    <Footer />
  </div>
);

export default App;
