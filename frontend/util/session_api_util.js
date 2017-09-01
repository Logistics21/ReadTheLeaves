export const signup = user => {
  debugger
  return $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user }
  })
};

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

// export const updateUserCity = (user, city_id, city_name, city_code) => (
//   $.ajax({
//     method: 'PATCH',
//     url: `api/users/${user.id}`,
//     data: { user: { city_id, city_name, city_code } }
//   })
// );
//
// export const updateUser = user => (
//   $.ajax({
//     method: 'PATCH',
//     url: `api/users/${user.id}`,
//     data: { user },
//     contentType: false,
//     processData: false
//   })
// );
