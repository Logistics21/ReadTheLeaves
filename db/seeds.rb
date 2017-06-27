User.destroy_all

User.create(first_name: "guest", last_name: "user", email: "guest@gmail.com", password: "password", is_host: true)
User.create(first_name: "tommy", last_name: "go", email: "test@gmail.com", password: "password")
User.create(first_name: "timmy", last_name: "to", email: "test1@gmail.com", password: "password")
User.create(first_name: "jimmy", last_name: "the", email: "test2@gmail.com", password: "password")
User.create(first_name: "kimmy", last_name: "store", email: "test3@gmail.com", password: "password")
User.create(first_name: "slimmy", last_name: "for", email: "test4@gmail.com", password: "password")
User.create(first_name: "clyde", last_name: "gorceries", email: "test5@gmail.com", password: "password")

City.destroy_all

City.create(name: "San Francisco", city_code: "SF")
City.create(name: "New York City", city_code: "NYC")
City.create(name: "Chicago", city_code: "CHI")
City.create(name: "Washington D.C", city_code: "DC")
City.create(name: "Los Angeles", city_code: "LAX")
