 json.extract! city, :id, :name, :city_code
json.set! :hosts do
  json.array! hosts, :first_name, :last_name
end
