import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchDirectMessages } from '../../actions/direct_message_actions';
import DMsList from './dms_list';

const mapStateToProps = state => ({
  directMessages: Object.values(state.entities.directMessages)
});

const mapDispatchToProps = dispatch => ({
  fetchDirectMessages: () => dispatch(fetchDirectMessages())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DMsList)
);
