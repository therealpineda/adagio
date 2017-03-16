json.array! @albums do |album|
  json.extract! album, :id, :title, :image_url
end
