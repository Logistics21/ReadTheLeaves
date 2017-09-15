import { connect } from 'react-redux';
import { fetchCities } from '../../actions/cities_actions';
import { updateUser } from '../../actions/users_actions';
import  { selectAllCities } from '../../reducers/selectors';

import ProfileForm from './profile_form';

const mapStateToProps = (state) => {
  return {
    signedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    cities: selectAllCities(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (id, user) => dispatch(updateUser(id, user)),
    fetchCities: () => dispatch(fetchCities()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileForm);
