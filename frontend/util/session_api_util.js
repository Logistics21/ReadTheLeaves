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

// contentType and processData can only be used with formData Object
// will clear params passed to controller otherwise
export const updateUser = (id, user) => {
  return (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${id}`,
    data: user,
    contentType: false,
    processData: false,
  }))
};

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
