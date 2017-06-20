# ReadTheLeaves

[ReadTheLeaves][heroku]

[Trello Link][trello]

[heroku]: linksforthcoming
[trello]: https://trello.com/b/94a5MSEk/readtheleaves

## Minimum Viable Product

*ReadTheLeaves* is a web application based on the casual meetup site Tea With
Strangers, created by Ankit Shah. It is built using Ruby on Rails and
React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, signIn, and guest/demo signIn
- [ ] Choose City
- [ ] Host Events
- [ ] Attend Events
- [ ] Dashboard of attended events/hosted events
- [ ] A production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 day)

**Objective:** Functioning back-end with front-end user authentication.

### Phase 2: Choose City (1 day)

**Objective:** Users can choose their home city for meetups. They will be
provided a link to cities which currently have hosts.

### Phase 3: Host/attend Events (3 days)

**Objective:** After selecting a city, user will then be provided with upcoming
tea meetups that display time, date, and locations. The user can then select
the one(s) which work best for them. Users will also be able to host these events.

### Phase 4: Dashboard of attended events/hosted events(2 day)

**Objective:** attended/Hosted events can be modified from a Dashboard.

### Continuous: - Styling/Seeding

**Objective:** Add profile pic, seed data, and fancy html/css.

### Bonus Features (TBD)
- [ ] Hosts can include bio about themselves
- [ ] Loading pages with random quotes about tea and making friends
- [ ] Google Map API showing events based on location
- [ ] Suggestions based on event details and user profiles
