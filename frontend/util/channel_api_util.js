export const fetchChannels = serverId => (
  $.ajax({
    method: 'GET',
    url: 'api/channels',
    data: { serverId }
  })
);

export const fetchChannel = channelId => (
  $.ajax({
    method: 'GET',
    url: `api/channels/${channelId}`
  })
);

export const createChannel = (channel, serverId) => (
  $.ajax({
    method: 'POST',
    url: 'api/channels',
    data: { channel, serverId }
  })
);

export const updateChannel = channel => (
  $.ajax({
    method: 'PATCH',
    url: `api/channels/${channel.id}`,
    data: { channel }
  })
);
