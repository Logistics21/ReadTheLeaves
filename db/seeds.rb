User.delete_all

User.create(first_name: "guest", last_name: "user", email: "guest@gmail.com", password: "password", is_host: true, city_id: 1)
User.create(first_name: "tommy", last_name: "go", email: "test@gmail.com", password: "password", is_host: true, city_id: 1)
User.create(first_name: "timmy", last_name: "to", email: "test1@gmail.com", password: "password", city_id: 1)
User.create(first_name: "jimmy", last_name: "the", email: "test2@gmail.com", password: "password", city_id: 1)
User.create(first_name: "kimmy", last_name: "store", email: "test3@gmail.com", password: "password", city_id: 1)
User.create(first_name: "inky", last_name: "for", email: "test4@gmail.com", password: "password", is_host: true, city_id: 2)
User.create(first_name: "pinky", last_name: "lots", email: "test5@gmail.com", password: "password", is_host: true, city_id: 2)
User.create(first_name: "blinky", last_name: "of", email: "test6@gmail.com", password: "password", is_host: true, city_id: 2)
User.create(first_name: "vince", last_name: "treats", email: "test7@gmail.com", password: "password", city_id: 3)
User.create(first_name: "slimmy", last_name: "and", email: "test8@gmail.com", password: "password", city_id: 3)
User.create(first_name: "clyde", last_name: "gorceries", email: "test9@gmail.com", password: "password", is_host: true, city_id: 3)

City.delete_all

City.create(name: "San Francisco", city_code: "SF", image: "https://s3.us-east-2.amazonaws.com/readtheleaves1-dev/cities/images/000/000/001/original/sf.jpg")
City.create(name: "New York City", city_code: "NYC", image: "https://s3.us-east-2.amazonaws.com/readtheleaves1-dev/cities/images/000/000/002/original/nyc.jpg")
City.create(name: "Chicago", city_code: "CHI", image: "https://s3.us-east-2.amazonaws.com/readtheleaves1-dev/cities/images/000/000/003/original/chi.jpg")
City.create(name: "Washington D.C", city_code: "DC", image: "https://s3.us-east-2.amazonaws.com/readtheleaves1-dev/cities/images/000/000/004/original/dc.jpg")
City.create(name: "Los Angeles", city_code: "LAX", image: "https://s3.us-east-2.amazonaws.com/readtheleaves1-dev/cities/images/000/000/005/original/lax.png")
City.create(name: "London", city_code: "LDN", image: "https://s3.us-east-2.amazonaws.com/readtheleaves1-dev/cities/images/000/000/006/original/ldn.jpg")

Event.delete_all
# [array of city ids]
# use [city ids].sample to give events a city

datetime = DateTime.civil(2017, 7, 1, 12, 35)

Event.create(date: datetime, address: "112 Wharf Ave.",description: "Time for Tea", city_id: 1, host_id: 1)
Event.create(date: datetime.change(day: 1), address: "1600 Pennsylvania Ave.",description: "Fight President", city_id: 1, host_id: 1)
Event.create(date: datetime.change(day: 2), address: "1 Main St.",description: "End Corruption", city_id: 1, host_id: 1)
Event.create(date: datetime.change(day: 2), address: "42nd St.",description: "See Hamilton", city_id: 2, host_id: 1)
Event.create(date: datetime.change(day: 3), address: "350 Main St.",description: "Pass legislation", city_id: 2, host_id: 2)
Event.create(date: datetime.change(day: 3), address: "Mulholland Dr.",description: "Beware David Lynch", city_id: 2, host_id: 2)
Event.create(date: datetime.change(day: 3), address: "1 Lakeshore Dr.",description: "Tea at Cape Fear", city_id: 3, host_id: 2)
Event.create(date: datetime.change(day: 3), address: "Anderson Blvd.",description: "Lunch at Cooper's", city_id: 3, host_id: 1)
Event.create(date: datetime.change(day: 4), address: "12 Elm St.",description: "Don't fall Asleep", city_id: 3, host_id: 2)
Event.create(date: datetime.change(day: 4), address: "Purgatory",description: "Meet Virgil, go on trip", city_id: 4, host_id: 2)
Event.create(date: datetime.change(day: 4), address: "Ridgmont High",description: "Have fast times", city_id: 4, host_id: 2)
Event.create(date: datetime.change(day: 4), address: "Compton",description: "Straight Outta", city_id: 5, host_id: 3)
Event.create(date: datetime.change(day: 5), address: "Graceland",description: "Meet the King", city_id: 5, host_id: 3)
Event.create(date: datetime.change(day: 5), address: "Baker St.",description: "You're cryin' now", city_id: 5, host_id: 3)
Event.create(date: datetime.change(day: 5), address: "Get Tea",description: "It's London... what did you expect?", city_id: 6, host_id: 3)
Event.create(date: datetime.change(day: 5), address: "Buckingham Palace",description: "Visit Mum", city_id: 6, host_id: 3)
