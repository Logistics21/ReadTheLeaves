json.extract! user, :id, :email, :first_name, :city_id, :city_code, :city_name, :is_host
json.image_url asset_path(user.image.url)

if user.events.empty?
  json.attending_events({})
else
  json.attending_events user.events.pluck(:id)
end

if user.hosted_events.empty?
  json.hosted_events({})
else
  json.hosted_events user.hosted_events.pluck(:id)
end
