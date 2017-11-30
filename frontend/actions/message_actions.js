import * as MessageUtil from '../util/message_api_util';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const fetchMessages = (serverId, channelId) => dispatch => (
  MessageUtil.fetchMessages(serverId, channelId).then(messages => (
    dispatch(receiveMessages(messages))
  ))
);

export const fetchMessage = id => dispatch => (
  MessageUtil.fetchMessage(id).then(message => (
    dispatch(receiveMessage(message))
  ))
);

export const createMessage = (msg, chId, srvId) => dispatch => (
  MessageUtil.createMessage(msg, chId, srvId).then(message => (
    dispatch(receiveMessage(message))
  ))
);

export const updateMessage = msg => dispatch => (
  MessageUtil.updateMessage(msg).then(message => (
    dispatch(receiveMessage(message))
  ))
);
