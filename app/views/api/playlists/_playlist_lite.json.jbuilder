json.extract! playlist, :id, :name
author_name = "#{playlist.user.first_name} #{playlist.user.last_name}"
json.author_id playlist.user.id
json.author author_name
json.created_at Time.at(playlist.created_at).utc.strftime("%B %-d, %Y")
playlist_length = playlist.songs.inject(0) { |sum, song| sum + song.duration}
if playlist_length > 3600
  hours = 0
  until playlist_length < 3600
      hours += 1
      playlist_length -= 3600
  end
  json.duration "#{hours} hr #{playlist_length / 60} min"
else
  json.duration "#{playlist_length / 60} min"
end
json.num_songs playlist.songs.count
json.followers_count pluralize(playlist.playlist_follows.count, 'follower')
