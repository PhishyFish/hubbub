import { connect } from 'react-redux';

import Main from './main';

const mapStateToProps = ({ currentUser }) => ({
  currentUser
});

export default connect(mapStateToProps, null)(Main);
