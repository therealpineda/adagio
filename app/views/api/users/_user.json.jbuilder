json.extract! user, :id, :username, :first_name, :last_name

json.playlists do
  json.array! user.playlists do |playlist|
    json.extract! playlist, :id, :name
    json.created_at Time.at(playlist.created_at).utc.strftime("%B %-d, %Y")
    playlist_length = playlist.songs.inject(0) { |sum, song| sum + song.duration}
    if playlist_length > 3600
      json.duration "#{playlist_length / 3600} hr #{playlist_length / 60} min"
    else
      json.duration "#{playlist_length / 60} min"
    end
    json.num_songs playlist.songs.count
  end
end
