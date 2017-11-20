City.delete_all

city1 = City.create(name: "San Francisco", city_code: "SF", image: "https://s3.us-east-2.amazonaws.com/readtheleaves1-dev/cities/images/000/000/001/original/sf.jpg")
city2 = City.create(name: "New York City", city_code: "NYC", image: "https://s3.us-east-2.amazonaws.com/readtheleaves1-dev/cities/images/000/000/002/original/nyc.jpg")
city3 = City.create(name: "Chicago", city_code: "CHI", image: "https://s3.us-east-2.amazonaws.com/readtheleaves1-dev/cities/images/000/000/003/original/chi.jpg")
city4 = City.create(name: "Washington D.C", city_code: "DC", image: "https://s3.us-east-2.amazonaws.com/readtheleaves1-dev/cities/images/000/000/004/original/dc.jpg")
city5 = City.create(name: "Los Angeles", city_code: "LAX", image: "https://s3.us-east-2.amazonaws.com/readtheleaves1-dev/cities/images/000/000/005/original/lax.png")
city6 = City.create(name: "London", city_code: "LDN", image: "https://s3.us-east-2.amazonaws.com/readtheleaves1-dev/cities/images/000/000/006/original/ldn.jpg")

User.delete_all

user1 = User.create(first_name: "guest", last_name: "user", email: "guest@gmail.com", password: "password", is_host: true, city_id: city1.id)
user2 = User.create(first_name: "tommy", last_name: "go", email: "test@gmail.com", password: "password", is_host: true, city_id: city1.id)
user3 = User.create(first_name: "timmy", last_name: "to", email: "test1@gmail.com", password: "password", city_id: city1.id)
user4 = User.create(first_name: "jimmy", last_name: "the", email: "test2@gmail.com", password: "password", city_id: city1.id)
user5 = User.create(first_name: "kimmy", last_name: "store", email: "test3@gmail.com", password: "password", city_id: city1.id)
user6 = User.create(first_name: "inky", last_name: "for", email: "test4@gmail.com", password: "password", is_host: true, city_id: city2.id)
user7 = User.create(first_name: "pinky", last_name: "lots", email: "test5@gmail.com", password: "password", is_host: true, city_id: city2.id)
user8 = User.create(first_name: "blinky", last_name: "of", email: "test6@gmail.com", password: "password", is_host: true, city_id: city2.id)
user9 = User.create(first_name: "vince", last_name: "treats", email: "test7@gmail.com", password: "password", city_id: city3.id)
user10 = User.create(first_name: "slimmy", last_name: "and", email: "test8@gmail.com", password: "password", city_id: city3.id)
user11 = User.create(first_name: "clyde", last_name: "gorceries", email: "test9@gmail.com", password: "password", is_host: true, city_id: city3.id)


Event.delete_all
datetime = DateTime.now

Event.create(date: datetime, address: "112 Wharf Ave.",description: "Time for Tea", city_id: city1.id, host_id: user1.id)
Event.create(date: datetime.change(day: 1), address: "1600 Pennsylvania Ave.",description: "Fight President", city_id: city1.id, host_id: user1.id)
Event.create(date: datetime.change(day: 2), address: "1 Main St.",description: "End Corruption", city_id: city1.id, host_id: user1.id)
Event.create(date: datetime.change(day: 2), address: "42nd St.",description: "See Hamilton", city_id: city2.id, host_id: user1.id)
Event.create(date: datetime.change(day: 3), address: "350 Main St.",description: "Pass legislation", city_id: city2.id, host_id: user2.id)
Event.create(date: datetime.change(day: 3), address: "Mulholland Dr.",description: "Beware David Lynch", city_id: city2.id, host_id: user2.id)
Event.create(date: datetime.change(day: 3), address: "1 Lakeshore Dr.",description: "Tea at Cape Fear", city_id: city3.id, host_id: user2.id)
Event.create(date: datetime.change(day: 3), address: "Anderson Blvd.",description: "Lunch at Cooper's", city_id: city3.id, host_id: user1.id)
Event.create(date: datetime.change(day: 4), address: "12 Elm St.",description: "Don't fall Asleep", city_id: city3.id, host_id: user2.id)
Event.create(date: datetime.change(day: 4), address: "Purgatory",description: "Meet Virgil, go on trip", city_id: city4.id, host_id: user2.id)
Event.create(date: datetime.change(day: 4), address: "Ridgmont High",description: "Have fast times", city_id: city4.id, host_id: user2.id)
Event.create(date: datetime.change(day: 4), address: "Compton",description: "Straight Outta", city_id: city5.id, host_id: user11.id)
Event.create(date: datetime.change(day: 5), address: "Graceland",description: "Meet the King", city_id: city5.id, host_id: user11.id)
Event.create(date: datetime.change(day: 5), address: "Baker St.",description: "You're cryin' now", city_id: city5.id, host_id: user11.id)
Event.create(date: datetime.change(day: 5), address: "Get Tea",description: "It's London... what did you expect?", city_id: city6.id, host_id: user11.id)
Event.create(date: datetime.change(day: 5), address: "Buckingham Palace",description: "Visit Mum", city_id: city6.id, host_id: user11.id)
