json.extract! user, :id, :username, :image_url
json.name full_name(user)

json.playlists do
  json.array! user.playlists do |playlist|
    json.extract! playlist, :id, :name
    author_name = full_name(playlist.user)
    json.author_id playlist.user.id
    json.author author_name
    json.images calc_playlist_image(playlist.songs)
    json.created_at playlist.created_at
    playlist_length = playlist.songs.inject(0) { |sum, song| sum + song.duration}
    json.duration format_duration(playlist_length)
    json.num_songs playlist.songs.count
    json.followers_count pluralize(playlist.playlist_follows.count, 'follower')
    playlist_follow = PlaylistFollow.find do |follow|
      follow.playlist_id == playlist.id && follow.follower_id == current_user.id
    end

    json.following playlist_follow ? playlist_follow.id : false
  end
end

json.followed_playlists do
  json.array! user.followed_playlists do |playlist|
    json.extract! playlist, :id, :name
    author_name = full_name(playlist.user)
    json.author_id playlist.user.id
    json.author author_name
    json.images calc_playlist_image(playlist.songs)
    json.created_at playlist.created_at
    playlist_length = playlist.songs.inject(0) { |sum, song| sum + song.duration}
    json.duration format_duration(playlist_length)
    json.num_songs playlist.songs.count
    json.followers_count pluralize(playlist.playlist_follows.count, 'follower')

    playlist_follow = PlaylistFollow.find do |follow|
      follow.playlist_id == playlist.id && follow.follower_id == current_user.id
    end

    json.following playlist_follow ? playlist_follow.id : false
  end
end

user_follow = UserFollow.find do |follow|
  follow.user_id == user.id && follow.follower_id == current_user.id
end

json.following user_follow ? user_follow.id : false

json.followers_count pluralize(user.followers.count, 'follower')

json.followings do
  json.array! user.followings do |userf|
    json.id userf.id
    json.image_url userf.image_url
    json.name full_name(userf)
    json.followers_count pluralize(userf.followers.count, 'follower')
  end
end
