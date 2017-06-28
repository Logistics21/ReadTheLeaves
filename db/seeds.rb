User.delete_all

User.create(id: 1, first_name: "guest", last_name: "user", email: "guest@gmail.com", password: "password", is_host: true, city_id: 1)
User.create(id: 2, first_name: "tommy", last_name: "go", email: "test@gmail.com", password: "password", is_host: true, city_id: 1)
User.create(id: 3, first_name: "timmy", last_name: "to", email: "test1@gmail.com", password: "password", city_id: 1)
User.create(id: 4, first_name: "jimmy", last_name: "the", email: "test2@gmail.com", password: "password", city_id: 1)
User.create(id: 5, first_name: "kimmy", last_name: "store", email: "test3@gmail.com", password: "password", city_id: 1)
User.create(id: 6, first_name: "slimmy", last_name: "for", email: "test4@gmail.com", password: "password", city_id: 1)
User.create(id: 7, first_name: "clyde", last_name: "gorceries", email: "test5@gmail.com", password: "password", is_host: true, city_id: 1)

City.delete_all

City.create(id: 1, name: "San Francisco", city_code: "SF")
City.create(id: 2, name: "New York City", city_code: "NYC")
City.create(id: 3, name: "Chicago", city_code: "CHI")
City.create(id: 4, name: "Washington D.C", city_code: "DC")
City.create(id: 5, name: "Los Angeles", city_code: "LAX")
City.create(id: 6, name: "London", city_code: "LDN")

Event.delete_all

datetime = DateTime.civil(2017, 7, 1, 12, 35)

Event.create(id: 1, date: datetime, address: "112 Wharf Ave.",description: "Time for Tea", city_id: 1, host_id: 1)
Event.create(id: 2, date: datetime.change(day: 2), address: "1600 Pennsylvania Ave.",description: "Fight Pres", city_id: 1, host_id: 1)
Event.create(id: 3, date: datetime.change(day: 3), address: "1 Main St.",description: "End Corruption", city_id: 1, host_id: 1)
Event.create(id: 4, date: datetime.change(day: 4), address: "42nd St.",description: "See Hamilton", city_id: 2, host_id: 1)
