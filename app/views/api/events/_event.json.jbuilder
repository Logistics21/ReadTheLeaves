address = event.address.split(",")
json.extract! event, :id, :city_id, :host_id, :spots
json.address address[0]
json.city address[1]
json.date event.date.to_s
json.date_info event.date.strftime('%A %B %e %Y %l:%M %p')
json.host_name event.host.first_name
json.city_name event.city.name
json.host_image asset_path(event.host.image.url)
json.spots

unless event.users.empty?
  json.attendees event.users.pluck(:id)
else
  json.attendees([])
end
