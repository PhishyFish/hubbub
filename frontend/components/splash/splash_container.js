import { connect } from 'react-redux';

import Splash from './splash';
import { login } from '../../actions/session_actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: user => dispatch(login(user))
});

export default connect(null, mapDispatchToProps)(Splash);
