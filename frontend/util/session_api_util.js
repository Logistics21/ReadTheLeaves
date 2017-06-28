export const signup = user => (
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user }
  })
);

export const signin = user => (
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user }
  })
);

export const signout = () => (
  $.ajax({
    method: "DELETE",
    url: "/api/session",
  })
);

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
