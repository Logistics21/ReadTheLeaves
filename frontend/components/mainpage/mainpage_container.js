import { connect } from 'react-redux';
import MainPage from './mainpage';

export const mapStateToProps = ({ session }) => ({
  session
})

export default connect(
  mapStateToProps,
  null
)(MainPage)
