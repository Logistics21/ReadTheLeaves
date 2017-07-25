import { connect } from 'react-redux';
import CityDetail from './city_detail';
import { fetchCity } from '../../actions/cities_actions';
import { updateUserCity } from '../../actions/session_actions';
import  { selectAllEvents, selectAllUsers, selectAllHosts } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ session, cities }, ownProps) => {
  const city = cities[ownProps.match.params.id]
  // cities[ownProps.match.params.id] : { hosts: [], name: "", city_code: "", city_name: "" };
  // if (!city.hosts) city.hosts = [];
  // if (!city.events) city.events = [];
  // debugger
  return {
    currentUser: session.currentUser,
    events: selectAllEvents(city.events),
    users: selectAllUsers(city.users),
    hosts: selectAllHosts(city.hosts),
    city
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCity: (id) => dispatch(fetchCity(id)),
    updateUserCity: (user, city_id, city_name, city_code) => (
      dispatch(updateUserCity(user, city_id, city_name, city_code))
  )};
};

export default withRouter(
  connect(
  mapStateToProps,
  mapDispatchToProps
)(CityDetail));
