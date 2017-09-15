export const updateUser = (id, user) => {
  return (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${id}`,
    data: user,
    // dataType: user,
    contentType: false,
    processData: false,
  }))
};

export const requestUser = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  })
);
