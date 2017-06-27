User.destroy_all

User.create(first_name: "guest", last_name: "user", email: "guest@gmail.com", password: "password", is_host: true, city_id: 1)
User.create(first_name: "tommy", last_name: "go", email: "test@gmail.com", password: "password", city_id: 1)
User.create(first_name: "timmy", last_name: "to", email: "test1@gmail.com", password: "password", city_id: 1)
User.create(first_name: "jimmy", last_name: "the", email: "test2@gmail.com", password: "password", city_id: 1)
User.create(first_name: "kimmy", last_name: "store", email: "test3@gmail.com", password: "password", city_id: 1)
User.create(first_name: "slimmy", last_name: "for", email: "test4@gmail.com", password: "password", city_id: 1)
User.create(first_name: "clyde", last_name: "gorceries", email: "test5@gmail.com", password: "password", city_id: 1)

City.destroy_all

City.create(name: "San Francisco", city_code: "SF")
City.create(name: "New York City", city_code: "NYC")
City.create(name: "Chicago", city_code: "CHI")
City.create(name: "Washington D.C", city_code: "DC")
City.create(name: "Los Angeles", city_code: "LAX")
City.create(name: "London", city_code: "LDN")

Event.destroy_all

# datetime = DateTime.civil(2017, 7, 1, 12, 35)
# Event.create(date: datetime, address: "112 Wharf Ave.",description: "Time for Tea", city_id: 1, host_id: 1)
# Event.create(date: datetime.change(day: 2), address: "1600 Pennsylvania Ave.",description: "Fight Pres", city_id: 1, host_id: 1)
# Event.create(date: datetime.change(day: 3), address: "1 Main St.",description: "End Corruption", city_id: 1, host_id: 1)
# Event.create(date: datetime.change(day: 4), address: "42nd St.",description: "See Hamilton", city_id: 1, host_id: 1)
