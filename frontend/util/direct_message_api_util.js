export const fetchDirectMessages = () => (
  $.ajax({
    method: 'GET',
    url: 'api/direct_messages'
  })
);

export const fetchDirectMessage = directMessageId => (
  $.ajax({
    method: 'GET',
    url: `api/direct_messages/${directMessageId}`,
    error: err => console.log(err)
  })
);

export const createDirectMessage = directMessage => (
  $.ajax({
    method: 'POST',
    url: 'api/direct_messages',
    data: { directMessage: directMessage },
    error: err => console.log(err)
  })
);

export const updateDirectMessage = directMessage => (
  $.ajax({
    method: 'PATCH',
    url: `api/direct_messaages/${directMessage.id}`,
    data: { directMessage: directMessage },
    error: err => console.log(err)
  })
);
