City.delete_all

sf = City.create(name: "San Francisco", city_code: "SF", image: "https://s3.us-east-2.amazonaws.com/readtheleaves1-dev/cities/images/000/000/001/original/sf.jpg")
nyc = City.create(name: "New York City", city_code: "NYC", image: "https://s3.us-east-2.amazonaws.com/readtheleaves1-dev/cities/images/000/000/002/original/nyc.jpg")
chi = City.create(name: "Chicago", city_code: "CHI", image: "https://s3.us-east-2.amazonaws.com/readtheleaves1-dev/cities/images/000/000/003/original/chi.jpg")
dc = City.create(name: "Washington D.C", city_code: "DC", image: "https://s3.us-east-2.amazonaws.com/readtheleaves1-dev/cities/images/000/000/004/original/dc.jpg")
lax = City.create(name: "Los Angeles", city_code: "LAX", image: "https://s3.us-east-2.amazonaws.com/readtheleaves1-dev/cities/images/000/000/005/original/lax.png")
ldn = City.create(name: "London", city_code: "LDN", image: "https://s3.us-east-2.amazonaws.com/readtheleaves1-dev/cities/images/000/000/006/original/ldn.jpg")


puts "city created"


User.delete_all

# this is for guest login DO NOT DELETE

guest_login = User.create!(email: "guest@gmail.com", password: "password", first_name: "Stranger",
last_name: "Things", city_id: nyc.id, city_name: nyc.name, city_code: nyc.city_code, image: "https://s3.us-east-2.amazonaws.com/readtheleaves1-dev/users/images/000/000/013/original/mike.jpg")

# this is for guest login DO NOT DELETE


user_ids = [guest_login.id]


1.upto(40) do |i|
  email = Faker::Internet.email
  password = Faker::Internet.password(8)
  first_name = Faker::Name.name
  city = [sf, nyc, dc, lax, ldn, chi].sample
  i = rand(1..22)
  image = "https://s3.us-east-2.amazonaws.com/readtheleaves1-dev/images/face#{i}.jpeg"

  user = User.create!(email: email, password: password, image: image, first_name: first_name, city_id: city.id, city_name: city.name, city_code: city.city_code)
  user_ids.push(user.id)
end


puts "users seeded"


Event.delete_all

event_ids = []

1.upto(10) do |i|
  city = nyc
  host_id = user_ids.sample
  address = Faker::Address.street_address + ', New York'
  date = Faker::Time.between(DateTime.now, DateTime.now + 30)

  event = Event.create!(host_id: host_id,
                        city_id: city.id,
                        address: address,
                        date: date,
                        spots: 5)

  event_ids.push(event.id)
end


1.upto(10) do |i|
  city = sf
  host_id = user_ids.sample
  address = Faker::Address.street_address + ', San Francisco'
  date = Faker::Time.between(DateTime.now, DateTime.now + 30)

  event = Event.create!(host_id: host_id,
                        city_id: city.id,
                        address: address,
                        date: date,
                        spots: 5)

  event_ids.push(event.id)
end


1.upto(10) do |i|
  city = lax
  host_id = user_ids.sample
  address = Faker::Address.street_address +  ', Los Angeles'
  date = Faker::Time.between(DateTime.now, DateTime.now + 30)

  event = Event.create!(host_id: host_id,
                        city_id: city.id,
                        address: address,
                        date: date,
                        spots: 5)

  event_ids.push(event.id)
end


1.upto(10) do |i|
  city = ldn
  host_id = user_ids.sample
  address = Faker::Address.street_address +  ', London'
  date = Faker::Time.between(DateTime.now, DateTime.now + 30)

  event = Event.create!(host_id: host_id,
                        city_id: city.id,
                        address: address,
                        date: date,
                        spots: 5)

  event_ids.push(event.id)
end


1.upto(10) do |i|
  city = chi
  host_id = user_ids.sample
  address = Faker::Address.street_address +  ', Chicago'
  date = Faker::Time.between(DateTime.now, DateTime.now + 30)

  event = Event.create!(host_id: host_id,
                        city_id: city.id,
                        address: address,
                        date: date,
                        spots: 5)

  event_ids.push(event.id)
end


1.upto(10) do |i|
  city = dc
  host_id = user_ids.sample
  address = Faker::Address.street_address +  ', Washington, D.C'
  date = Faker::Time.between(DateTime.now, DateTime.now + 30)

  event = Event.create!(host_id: host_id,
                        city_id: city.id,
                        address: address,
                        date: date,
                        spots: 5)

  event_ids.push(event.id)
end


puts "city created"


Attendance.delete_all

1.upto(150) do |i|
  user_id = user_ids.sample
  event_id = event_ids.sample

  Attendance.create!(event_id: event_id, user_id: user_id) unless
  Attendance.exists?({event_id: event_id, user_id: user_id})
end


puts "database seeded"
