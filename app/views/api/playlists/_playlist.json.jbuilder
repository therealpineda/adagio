json.extract! playlist, :id, :name
playlist_length = playlist.songs.inject(0) { |sum, song| sum + song.duration}
if playlist_length > 3600
  json.duration "#{playlist_length / 3600} hr #{playlist_length / 60} min"
else
  json.duration "#{playlist_length / 60} min"
end
json.author "#{playlist.user.first_name} #{playlist.user.last_name}"
json.author_id playlist.user.id
json.author_username playlist.user.username
json.created_on Time.at(playlist.created_at).utc.strftime("%B %-d, %Y")
json.created_at playlist.created_at
json.songs do
  json.array! playlist.playlist_songs do |playlist_song|
    json.playlist_song_id playlist_song.id
    song = playlist_song.song
    json.extract! song, :id, :title
    json.artist song.artist.name
    json.album song.album.title
    json.image song.album.image_url
    json.duration Time.at(song.duration).utc.strftime("%-M:%S")
    json.url song.audio_url
  end
end

playlist_follow = PlaylistFollow.find do |follow|
  follow.playlist_id == playlist.id && follow.follower_id == current_user.id
end

json.following playlist_follow ? playlist_follow.id : false

json.followers_count pluralize(playlist.playlist_follows.count, 'follower')
