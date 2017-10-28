# debugger
json.extract! @city, :id, :name, :city_code
json.image_url asset_path(@city.image.url)

json.events do
  @events.each do |event|
    json.set! event.id do
      json.partial! "api/events/event", event: event
    end
  end
end


json.hosts do
  @hosts.each do |host|
    json.set! host.id do
      json.partial! "api/users/user", user: host
    end
  end
end

json.users do
  @users.each do |user|
    json.set! user.id do
      json.partial! "api/users/user_mini", user: user
    end
  end
end
