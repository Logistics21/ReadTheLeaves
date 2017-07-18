# json.extract! city, :id, :name, :city_code
# json.image_url asset_path(city.image.url)
#
# json.set! :hosts do
#   json.array! hosts, :first_name
# end
#
# json.events events do |event|
#   json.id event.id
#   json.day event.date.strftime("%A")
#   json.date event.date.strftime("%b %d")
#   json.time event.date.strftime("%l:%M %p")
#   json.address event.address
#   json.description event.description
#   json.host_id event.host_id
# end
