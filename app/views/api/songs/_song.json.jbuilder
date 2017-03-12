json.extract! song, :id, :album_order, :title
json.artist song.artist.name
json.album song.album.title
json.image song.album.image_url
json.duration Time.at(song.duration).utc.strftime("%-M:%S")
json.url song.audio_url
