```js
{
  currentUser: {
    id: 5,
    first_name: "Tom",
    email: "tommy@gmail.com"
  },
  users: {
    1: {
      id: 1
      username: "Joe Blow",
      email: "blowout@gmail.com"
    },
    2: {
      id: 2,
      username: "Ernie Hudson",
      email: "whoyagonnacall@gmail.com"
    },
    3: {
      id: 3,
      username: "George Harrison",
      email: "sitarhero@gmail.com"
    },
    4: {
      id: 4,
      username: "Doc Brown",
      email: "bttf@gmail.com"
    }
  },
  events: {
    1: {
    date: "April 16 2018",
    time: "3:00 PM",
    address: "350 5th Ave, New York, NY 10118",
    description: "Top of the World.",
    host_id: 10,
    city_id: 1,
    attendance: 4,
    attendants: [1, 2, 3, 4] (user ids)
  }
}
  cities: {
    id: 4,
    name: "Portland",
    image_url: "This url",
    city_events: [1, 2, 3] (event ids)
  },
  hosts: {
    id: 1,
    description: "Afraid of heights.",
    user_id: 2,
    host_events: [1, 2, 3] (event ids)
  }
}
```
