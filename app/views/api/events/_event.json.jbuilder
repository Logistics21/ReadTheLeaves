json.extract! event, :id, :address, :description, :city_id, :host_id, :spots
json.date event.date
json.host_name event.host.first_name
json.city_name event.city.name
json.image_url asset_path(event.host.image.url)
json.spots

unless event.users.empty?
  json.attendees event.users.pluck(:id)
else
  json.attendees({})
end
