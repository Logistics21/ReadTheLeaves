export const updateUser = (id, user) => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${id}`,
    data: { user },
  })
);

export const requestUser = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  })
);
