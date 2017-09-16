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

export const requestUser = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  })
);
