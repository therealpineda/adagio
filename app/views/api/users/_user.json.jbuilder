json.extract! user, :id, :username, :first_name, :last_name

json.playlists do
  json.array! user.playlists do |playlist|
    json.extract! playlist, :id, :name, :created_at
  end
end


# json.songs do
#   json.array! playlist.songs do |song|
#     json.extract! song, :id, :title
#     json.artist song.artist.name
#     json.album song.album.title
#     json.image song.album.image_url
#     json.duration Time.at(song.duration).utc.strftime("%-M:%S")
#   end
# end
