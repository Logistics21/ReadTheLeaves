import { connect } from 'react-redux';
import CityDetail from './city_detail';
import { fetchCity } from '../../actions/cities_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ session, cities }, ownProps) => {
  const city = cities[ownProps.match.params.id] ?
  cities[ownProps.match.params.id] : {hosts: [], name: "", city_code: ""} ;
  if (!city.hosts) {
    city.hosts = [];
  }
  
  return {
    currentUser: session.currentUser,
    city
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCity: (id) => dispatch(fetchCity(id))
  };
};

export default withRouter(
  connect(
  mapStateToProps,
  mapDispatchToProps
)(CityDetail));
