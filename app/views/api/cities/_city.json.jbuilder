 json.extract! city, :id, :name, :city_code
json.set! :hosts do
  json.array! hosts, :first_name
end

json.events events do |event|
  json.id event.id
  json.date event.date.strftime("%A, %d %b %Y %l:%M %p")
  json.address event.address
  json.description event.description
  json.host_id event.host_id
end
