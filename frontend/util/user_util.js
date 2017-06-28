export const updateUserCity = (user, city_id) => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: { user: { city_id } }
  })
);

export const updateUser = user => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: { user }
  })
);
