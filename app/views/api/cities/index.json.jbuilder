@cities.each do |city|
  json.set! city.id do
    json.partial! 'city', city: city
  end
end
