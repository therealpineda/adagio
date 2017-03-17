
json.albums do
  json.array! @albums do |album|
    json.extract! album, :id, :title, :image_url
  end
end

json.users do
  json.array! @users do |user|
    json.id user.id
    json.image_url user.image_url
    json.name full_name(user)
  end
end
