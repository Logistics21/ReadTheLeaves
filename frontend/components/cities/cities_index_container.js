import { connect } from 'react-redux';
import { fetchCities } from '../../actions/cities_actions';

import CitiesIndex from './cities_index';

const mapStateToProps = ({ cities }) => {
  return {
    cities
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCities: () => dispatch(fetchCities()),
    fetchCity: (id) => dispatch(fetchCity(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CitiesIndex)
