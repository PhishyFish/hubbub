export const fetchServers = join => (
  $.ajax({
    method: 'GET',
    url: 'api/servers',
    data: join
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

export const joinServer = serverId => (
  $.ajax({
    method: 'POST',
    url: 'api/server_members',
    data: { serverId }
  })
);
