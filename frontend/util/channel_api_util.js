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

export const createChannel = channel => (
  $.ajax({
    method: 'POST',
    url: 'api/channels',
    data: { channel }
  })
);

export const updateChannel = channel => (
  $.ajax({
    method: 'PATCH',
    url: `api/channels/${channel.id}`,
    data: { channel }
  })
);
