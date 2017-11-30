export const fetchMessages = (serverId, channelId) => (
  $.ajax({
    method: 'GET',
    url: 'api/messages',
    data: { serverId, channelId }
  })
);

export const fetchMessage = messageId => (
  $.ajax({
    method: 'GET',
    url: `api/messages/${messageId}`
  })
);

export const createMessage = (message, channelId, serverId) => (
  $.ajax({
    method: 'POST',
    url: 'api/messages',
    data: { message, channelId, serverId }
  })
);

export const updateMessage = message => (
  $.ajax({
    method: 'PATCH',
    url: `api/messages/${message.id}`,
    data: { message }
  })
);
