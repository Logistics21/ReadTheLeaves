import { connect } from 'react-redux';
import { fetchCities } from '../../actions/cities_actions';
import { updateUser } from '../../actions/session_actions';
import  { selectAllCities } from '../../reducers/selectors';

import ProfileForm from './profile_form';

const mapStateToProps = ({ session, cities }) => {
  return {
    signedIn: Boolean(session.currentUser),
    currentUser: session.currentUser,
    cities,
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
