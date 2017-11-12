json.extract! event, :id, :address, :description, :city_id, :host_id, :spots
date_array = event.date.gsub(/[,]/, "").split(" ")

json.day date_array[0]
json.month date_array[1]
json.date date_array[2]
json.year date_array[3]
json.time date_array[4]
json.period date_array[5]

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
