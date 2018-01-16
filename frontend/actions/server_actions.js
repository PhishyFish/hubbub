import * as ServerUtil from '../util/server_api_util';

export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';

export const receiveServers = servers => ({
  type: RECEIVE_SERVERS,
  servers
});

export const receiveServer = server => ({
  type: RECEIVE_SERVER,
  server
});

export const fetchServers = join => dispatch => (
  ServerUtil.fetchServers(join).then(servers => (
    dispatch(receiveServers(servers))
  ))
);

export const fetchServer = id => dispatch => (
  ServerUtil.fetchServer(id).then(server => (
    dispatch(receiveServer(server))
  ))
);

export const createServer = srv => dispatch => (
  ServerUtil.createServer(srv).then(server => (
    dispatch(receiveServer(server))
  ))
);

export const updateServer = srv => dispatch => (
  ServerUtil.updateServer(srv).then(server => (
    dispatch(receiveServer(server))
  ))
);

export const joinServer = srv => dispatch => (
  ServerUtil.joinServer(srv).then(server => (
    dispatch(receiveServer(server))
  ))
);
