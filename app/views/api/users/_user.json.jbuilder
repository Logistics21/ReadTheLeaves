json.extract! user, :id, :email, :first_name
json.image_url asset_path(user.image.url)
json.city_id user.city_id
json.city_code user.city_code
json.city_name user.city_name
json.is_host user.is_host


if user.events.empty?
  json.attending_events({})
else
  json.attending_events do
    user.events.each do |event|
      json.set! event.id do
        json.partial! "api/events/event.json",
        event: event
      end
    end
  end
end

if user.hosted_events.empty?
  json.hosted_events({})
else
  json.hosted_events do
    user.hosted_events.each do |event|
      json.set! event.id do
        json.partial! "api/events/event.json",
        event: event
      end
    end
  end
end
