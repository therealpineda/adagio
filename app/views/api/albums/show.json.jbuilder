json.extract! @album, :id, :title, :image_url
artist_name = @album.artist.name
json.artist artist_name
json.num_songs pluralize(@album.songs.count, "song")

album_length = @album.songs.inject(0) { |sum, song| sum + song.duration}
if album_length > 3600
  hours = 0
  until album_length < 3600
      hours += 1
      album_length -= 3600
  end
  json.duration "#{hours} hr #{album_length / 60} min"
else
  json.duration "#{album_length / 60} min"
end

i = 0
json.songs do
  json.array! @album.songs do |song|
    json.extract! song, :id, :album_order, :title
    json.artist song.artist.name
    json.album song.album.title
    json.image song.album.image_url
    json.duration Time.at(song.duration).utc.strftime("%-M:%S")
    json.url song.audio_url
    json.playlist_song_id i
    i += 1
  end
end
