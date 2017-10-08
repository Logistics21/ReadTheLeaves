json.extract! event, :id, :address, :description, :city_id, :host_id
json.day event.date.strftime("%A")
json.date event.date.strftime("%b %d")
json.time event.date.strftime("%l:%M %p")
json.host_name event.host.first_name
json.city_name event.city.name
json.image_url asset_path(event.host.image.url)
