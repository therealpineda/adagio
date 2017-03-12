json.extract! @playlist, :id, :name

json.images calc_playlist_image(@playlist.songs)
playlist_length = @playlist.songs.inject(0) { |sum, song| sum + song.duration}
json.duration format_duration(playlist_length)

json.author full_name(@playlist.user)
json.author_id @playlist.user.id
json.author_username @playlist.user.username
json.created_at @playlist.created_at
json.songs do
  json.array! @playlist.playlist_songs do |playlist_song|
    json.playlist_song_id playlist_song.id
    song = playlist_song.song
    json.partial! 'api/songs/song', song: song
  end
end

playlist_follow = PlaylistFollow.find do |follow|
  follow.playlist_id == @playlist.id && follow.follower_id == current_user.id
end

json.following playlist_follow ? playlist_follow.id : false

json.followers_count pluralize(@playlist.playlist_follows.count, 'follower')
