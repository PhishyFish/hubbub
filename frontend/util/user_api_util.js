export const fetchUsers = serverId => (
  $.ajax({
    method: 'GET',
    url: 'api/users',
    data: { serverId }
  })
);

export const fetchUser = userId => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}`
  })
);

export const updateUser = user => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: { user }
  })
);
