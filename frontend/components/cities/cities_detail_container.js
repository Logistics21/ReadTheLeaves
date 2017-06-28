import { connect } from 'react-redux';
import CityDetail from './city_detail';
import { fetchCity } from '../../actions/cities_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ session, cities }) => {
  // debugger
  return {
    currentUser: session.currentUser,
    cities: cities
  }
}

const mapDispatchToProps = dispatch => {
  // debugger
  return {
    fetchCity: (id) => dispatch(fetchCity(id))
  };
};

export default withRouter(
  connect(
  mapStateToProps,
  mapDispatchToProps
)(CityDetail));
