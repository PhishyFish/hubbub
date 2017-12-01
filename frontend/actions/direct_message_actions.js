import * as DMUtil from '../util/direct_message_api_util';

export const RECEIVE_DIRECT_MESSAGES = 'RECEIVE_DIRECT_MESSAGES';
export const RECEIVE_DIRECT_MESSAGE = 'RECEIVE_DIRECT_MESSAGE';

export const receiveDirectMessages = directMessages => ({
  type: RECEIVE_DIRECT_MESSAGES,
  directMessages
});

export const receiveDirectMessage = directMessage => ({
  type: RECEIVE_DIRECT_MESSAGE,
  directMessage
});

export const fetchDirectMessages = () => dispatch => (
  DMUtil.fetchDirectMessages().then(directMessages => (
    dispatch(receiveDirectMessages(directMessages))
  ))
);

export const fetchDirectMessage = id => dispatch => (
  DMUtil.fetchDirectMessage(id).then(directMessage => (
    dispatch(receiveDirectMessage(directMessage))
  ))
);

export const createDirectMessage = (dm, members) => dispatch => (
  DMUtil.createDirectMessage(dm, members).then(directMessage => (
    dispatch(receiveDirectMessage(directMessage))
  ))
);

export const updateDirectMessage = dm => dispatch => (
  DMUtil.updateDirectMessage(dm).then(directMessage => (
    dispatch(receiveDirectMessage(directMessage))
  ))
);
