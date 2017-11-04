export const requestCityEvents = city_id => (
  $.ajax({
    method: 'GET',
    url: `api/cities/${city_id}/events`
  })
);

export const createEvent = event => (
  $.ajax({
    method: 'POST',
    url: 'api/events',
    data: { event }
  })
);

export const updateEvent = event => (
  $.ajax({
    method: 'PATCH',
    url: `api/events/${event.id}`,
    data: { event }
  })
);

export const deleteEvent = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/events/${id}`,
  })
);

export const attendEvent = event_id => (
  $.ajax({
    method: 'POST',
    url: 'api/attendances',
    data: { attendance: { event_id } }
  })
);

export const leaveEvent = (event_id, user_id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/attendances/${event_id}`,
    data: { event_id }
  })
);
