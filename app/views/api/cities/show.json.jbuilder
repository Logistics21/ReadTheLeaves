# json.partial! "/api/cities/city", city: @city, hosts: @hosts, events: @events

json.extract! @city, :id, :name, :city_code
json.image_url asset_path(@city.image.url)

# json.set! :hosts do
#   json.array! hosts, :first_name
# end

# changes events from array to object with keys pointing to event ids
json.events do
  @city.events.each do |event|
    json.set! event.id do
      json.partial! "api/events/event", event: event
    end
  end
end

# stores city-based events in arrayarray
# json.events @city.events do |event|
#   json.partial! "api/events/event", event: event
# end



# json.id event.id
# json.day event.date.strftime("%A")
# json.date event.date.strftime("%b %d")
# json.time event.date.strftime("%l:%M %p")
# json.address event.address
# json.description event.description
# json.host_id event.host_id
