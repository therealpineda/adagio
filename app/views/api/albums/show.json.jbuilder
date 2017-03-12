json.extract! @album, :id, :title, :image_url
artist_name = @album.artist.name
json.artist artist_name
json.num_songs pluralize(@album.songs.count, "song")

album_length = @album.songs.inject(0) { |sum, song| sum + song.duration}

json.duration format_duration(album_length)

json.songs do
  json.array! @album.songs do |song|
    json.playlist_song_id song.id

    json.partial! 'api/songs/song', song: song

  end
end
