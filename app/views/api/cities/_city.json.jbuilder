json.extract! city, :id, :name, :city_code
json.array! event.id
city.events do |event|

# :events
# add this when cities get events
# will be an array of event ids
