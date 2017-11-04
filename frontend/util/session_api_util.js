export const signup = (user) => {
  return $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user }
  })
};

export const signin = (user) => (
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

export const userQuickUpdate = (user, { id, name, city_code }) => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: {
      user: {
        city_id: id,
        city_name: name,
        city_code
      }
    }
  })
);
// export const updateUserCity = (user, city_id, city_name, city_code) => (
//   $.ajax({
//     method: 'PATCH',
//     url: `api/users/${user.id}`,
//     data: { user: { city_id, city_name, city_code } }
//   })
// );
