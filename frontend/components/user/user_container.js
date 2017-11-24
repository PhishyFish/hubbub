import { connect } from 'react-redux';

import User from './user';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: user => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
