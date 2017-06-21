import { connect } from 'react-redux';
import MainPage from './main_page';

export const mapStateToProps = ({ session }) => ({
  session
})

export default connect(
  mapStateToProps,
  null
)(MainPage)
