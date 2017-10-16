export const attendEvent = (event_id) => (
  $.ajax({
    method: 'POST',
    url: `/api/attendances`,
    data: { attendance: { event_id, user_id } }
  })
)

export const leaveEvent = (user_id, event_id) => (
  $.ajax({
    method: 'DELETE',
    url: `/events/${event_id}/attendances`,
    data: { attendance: { event_id, user_id } }
  })
)
