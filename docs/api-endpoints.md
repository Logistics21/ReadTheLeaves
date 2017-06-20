# API Endpoints

### Root API

- `GET /` - loads React web app

## JSON API

### Users

- `Get /api/users/:id` (show user account)
- `POST /api/users` (create account)
- `PATCH /api/users/:id` (edit account)
- `DELETE /api/users/:id` (delete account)

### Session

- `POST /api/session` (log in)
- `DELETE /api/session` (log out)

### Events

- `GET /api/events` (takes you to events in your city)
- `POST /api/events` (create event)
- `DELETE /api/events/:id` (leave event)

### Attends (join table)

- `POST /api/attends` (join user with event)

### Cities

- `POST /api/cities` (bonus: redirect to thank you for suggestion page)
- `GET /api/cities/` (navigate to city index)
- `GET /api/cities/:id` (events in that city)

### Hosts

- `GET /api/hosts/` (Host profile)
- `POST /api/hosts/` (Become Host)
- `PATCH /api/hosts/:id` (bonus: add bio for hosts)
- `DELETE /api/hosts/:id` (host delete dependent destroy host's events)
