import { connect } from 'react-redux';

import { login, signup, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = (state, { location }) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  dispatch(receiveErrors([]));

  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    login: user => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
