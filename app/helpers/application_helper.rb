module ApplicationHelper

  def full_name(user)
    "#{user.first_name} #{user.last_name}"
  end

  def format_duration(seconds)
    if seconds > 3600
      hours = 0
      until seconds < 3600
          hours += 1
          seconds -= 3600
      end
      return "#{hours} hr #{seconds / 60} min"
    else
      return "#{seconds / 60} min"
    end
  end

  def calc_playlist_image(songs)
    images = []
    if songs.length < 4
      images =  ["https://s3.amazonaws.com/adagio-prod/images/default/playlist_img.jpg"]
    else
      songs.each do |song|
        if images.length < 4 && !images.include?(song.album.image_url)
          images.push(song.album.image_url)
        end
      end

      if images.length < 4
        images.push(images[0]) until images.length == 4
      end

    end
    images
  end
end
