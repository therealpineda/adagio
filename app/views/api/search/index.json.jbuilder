
json.songs do
  json.array! @songs do |song|
    json.partial! 'api/songs/song', song: song
  end
end

json.albums do
  json.array! @albums do |album|
    json.extract! album, :id, :title, :image_url
    json.artist album.artist.name
  end
end

json.playlists do
  json.array! @playlists do |playlist|
    json.extract! playlist, :id, :name
    json.author full_name(playlist.user)
  end
end

json.users do
  json.array! @users do |user|
    json.id user.id
    json.image_url user.image_url
    json.name full_name(user)
  end
end
