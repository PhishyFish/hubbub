export const fetchDirectMessages = () => (
  $.ajax({
    method: 'GET',
    url: 'api/direct_messages'
  })
);

export const fetchDirectMessage = directMessageId => (
  $.ajax({
    method: 'GET',
    url: `api/direct_messages/${directMessageId}`
  })
);

export const createDirectMessage = directMessage => (
  $.ajax({
    method: 'POST',
    url: 'api/direct_messages',
    data: { directMessage }
  })
);

export const updateDirectMessage = directMessage => (
  $.ajax({
    method: 'PATCH',
    url: `api/direct_messages/${directMessage.id}`,
    data: { directMessage }
  })
);
