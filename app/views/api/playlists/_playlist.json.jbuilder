json.extract! playlist, :id, :name
playlist_length = playlist.songs.inject(0) { |sum, song| sum + song.duration}
if playlist_length > 3600
  json.duration "#{playlist_length / 3600} hr #{playlist_length / 60} min"
else
  json.duration "#{playlist_length / 60} min"
end
json.length
json.author "#{playlist.user.first_name} #{playlist.user.last_name}"
json.created_at Time.at(playlist.created_at).utc.strftime("%B %-d, %Y")
json.songs do
  json.array! playlist.songs do |song|
    json.extract! song, :id, :title
    json.artist song.artist.name
    json.album song.album.title
    json.image song.album.image_url
    json.duration Time.at(song.duration).utc.strftime("%-M:%S")
    json.url song.audio_url
  end
end
