@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :title, :image_url
    artist_name = album.artist.name
    json.artist artist_name
    json.num_songs pluralize(album.songs.count, "song")
  end
end
