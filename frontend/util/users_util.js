export const requestUser = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  })
);
