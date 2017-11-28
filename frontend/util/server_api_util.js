export const fetchServers = () => (
  $.ajax({
    method: 'GET',
    url: 'api/servers'
  })
);

export const fetchServer = serverId => (
  $.ajax({
    method: 'GET',
    url: `api/servers/${serverId}`
  })
);

export const createServer = server => (
  $.ajax({
    method: 'POST',
    url: 'api/servers',
    data: { server }
  })
);

export const updateServer = server => (
  $.ajax({
    method: 'PATCH',
    url: `api/servers/${server.id}`,
    data: { server }
  })
);
