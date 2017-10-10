import React from 'react';
import SignUpContainer from './signup/signup_container';
import SignInContainer from './signup/signin_container';
import MainPageContainer from './mainpage/mainpage_container';
import NavBarContainer from './navbar/navbar_container';
import CitiesIndexContainer from './cities/cities_index_container';
import CitiesDetailContainer from './cities/cities_detail_container';
import EventFormContainer from './events/event_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import ProfileContainer from './profile/profile_container';
import ProfileFormContainer from './profile/profile_form_container';
import Footer from './footer/footer';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Analytics from './analytics';

const App = () => (
  <div className="main-content">
    <NavBarContainer />
    <div className="body-content">
      <Route path="/" component={Analytics} />
      <Switch>
        <AuthRoute path="/signup" component={SignUpContainer} />
        <AuthRoute path="/signin" component={SignInContainer} />
        <Route exact path="/" component={MainPageContainer} />
        <Route exact path="/cities" component={CitiesIndexContainer} />
        <Route path="/cities/:id" component={CitiesDetailContainer} />
        <Route exact path="/new_event" component={EventFormContainer} />
        <Route path="/update_event/:event_id" component={EventFormContainer} />
        <ProtectedRoute path="/dashboard" component={DashboardContainer} />
        <ProtectedRoute path="/update_profile" component={ProfileFormContainer} />
        <ProtectedRoute path="/profile/:id" component={ProfileContainer} />
      </Switch>
    </div>
    <Footer />
  </div>
);

export default App;
