json.extract! @city, :id, :name, :city_code
json.image_url asset_path(@city.image.url)

json.events do
  @events.each do |event|
    json.set! event.id do
      json.partial! "api/events/event", event: event
    end
  end
end
