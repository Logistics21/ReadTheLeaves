
json.extract! event, :id, :address, :description, :city_id, :host_id, :spots
json.date event.date.to_s
json.date_info event.date.strftime('%A %B %e %Y %l:%M %p')
json.host_name event.host.first_name
json.city_name event.city.name
json.host_image asset_path(event.host.image.url)
json.spots

unless event.users.empty?
  json.attendees do
    event.users.each do |user|
      json.set! user.id do
        json.partial! "api/users/user_mini.json",
        user: user
      end
    end
  end
else
  json.attendees({})
end
