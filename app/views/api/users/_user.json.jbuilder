json.extract! user, :id, :email, :first_name, :city_id, :city_code, :city_name, :is_host
json.image_url asset_path(user.image.url)
