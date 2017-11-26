import { connect } from 'react-redux';
import { fetchCities, fetchCity } from '../../actions/cities_actions';
import  { selectAllCities } from '../../reducers/selectors';

import CitiesIndex from './cities_index';

const mapStateToProps = ({ cities }) => {
  return {
    cities
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCities: () => dispatch(fetchCities())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CitiesIndex);
