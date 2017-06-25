import { connect } from 'react-redux';
import { fetchCities, fetchCity } from '../../actions/cities_actions';
import  { selectAllCities } from '../../reducers/selectors';
import CitiesIndex from './cities_index';

const mapStateToProps = (state) => {
  debugger
  return {
    cities: selectAllCities(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCities: () => dispatch(fetchCities()),
    fetchCity: (id) => dispatch(fetchCity(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CitiesIndex);
