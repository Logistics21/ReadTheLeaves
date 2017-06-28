 json.extract! city, :id, :name, :city_code
json.set! :hosts do
  json.array! hosts, :first_name, :last_name
end

json.events events do |event|
  json.id event.id
  json.date event.date.strftime("%A, %d %b %Y %l:%M %p")
  json.address event.address
  json.description event.description
  json.city_id event.city_id
  json.host_id User.find_by(id: event.host_id), :id
  json.host_name User.find_by(id: event.host_id), :first_name
end
