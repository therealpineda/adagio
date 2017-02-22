json.extract! user, :id, :username, :first_name, :last_name

json.playlists do
  json.array! user.playlists do |playlist|
    json.extract! playlist, :id, :name
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
  end

end

json.followed_playlists do
  json.array! user.followed_playlists do |playlist|
    json.extract! playlist, :id, :name
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
    json.name "#{userf.first_name} #{userf.last_name}"
    json.followers_count pluralize(userf.followers.count, 'follower')
  end
end
