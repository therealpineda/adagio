### ADAGIO DATABASE SEEDS ###

## USERS
User.destroy_all

User.create(username: 'johndoe', password: 'password', first_name: 'John', last_name: 'Doe', email: 'johndoe@email.com')
User.create(username: 'janedoe', password: 'password', first_name: 'Jane', last_name: 'Doe', email: 'janedoe@email.com')
User.create(username: 'jimmydoe', password: 'password', first_name: 'Jimmy', last_name: 'Doe', email: 'jimmydoe@email.com')

# Faker::Internet.unique.clear
# Faker::UniqueGenerator.clear ... not working ...

10.times do
  User.create(
    username: Faker::Pokemon.unique.name,
    password: SecureRandom::urlsafe_base64(8),
    first_name: Faker::Name.first_name,
    last_name: Faker::Music.instrument,
    email: Faker::Internet.unique.email
   )
end


## USER FOLLOWS
UserFollow.destroy_all

user_id = User.find_by(username: "johndoe").id
follower_id = User.find_by(username: "janedoe").id
UserFollow.create(user_id: user_id, follower_id: follower_id)

# # # # #
user_ids = User.all.pluck(:id)
# # # # #

user_ids.each do |user_id|
  other_users_ids = (user_ids - [user_id]).shuffle
  rand(0...other_users_ids.length).times do |i|
    UserFollow.create(user_id: user_id, follower_id: other_users_ids[i])
  end
end


## ARTISTS
Artist.destroy_all
default_img = "https://s3.amazonaws.com/adagio-prod/images/default/artist_img.jpg"

artist_names = [
  "Jahzzar",
  "The Kyoto Connection",
  "Waylon Thornton",
  "Silence Is Sexy",
  "LJ Kruzer"
]

artist_names.each do |artist_name|
  Artist.create(name: artist_name, image_url: default_img)
end


## ALBUMS
Album.destroy_all
default_img= "https://s3.amazonaws.com/adagio-prod/images/default/album_img.jpg"

artist_id = Artist.find_by(name: "Jahzzar").id
Album.create(title: "Traveller's Guide", artist_id: artist_id, image_url: "https://s3.amazonaws.com/adagio-prod/images/album_art/travellers_guide.jpg")
Album.create(title: "HiFi City Tales", artist_id: artist_id, image_url: "https://s3.amazonaws.com/adagio-prod/images/album_art/hifi_city_tales.jpg")

artist_id = Artist.find_by(name: "The Kyoto Connection").id
Album.create(title: "Wake Up", artist_id: artist_id, image_url: default_img)
artist_id = Artist.find_by(name: "Waylon Thornton").id
Album.create(title: "Mystery Club", artist_id: artist_id, image_url: default_img)
artist_id = Artist.find_by(name: "Silence Is Sexy").id
Album.create(title: "Antique Instrumentals", artist_id: artist_id, image_url: default_img)
artist_id = Artist.find_by(name: "LJ Kruzer").id
Album.create(title: "Dance Audit Hour", artist_id: artist_id, image_url: default_img)


## SONGS
Song.destroy_all

album_id = Album.find_by(title: "Traveller's Guide").id
  Song.create(title: "Out of School", duration: 214, album_id: album_id, album_order: 1, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Jahzzar_-_01_-_Out_of_School.mp3")
  Song.create(title: "FM", duration: 135, album_id: album_id, album_order: 2, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Jahzzar_-_02_-_FM.mp3")
  Song.create(title: "Fireworks", duration: 229, album_id: album_id, album_order: 3, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Jahzzar_-_03_-_Fireworks.mp3")
  Song.create(title: "Storyteller", duration: 304, album_id: album_id, album_order: 4, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Jahzzar_-_04_-_Storyteller.mp3")
  Song.create(title: "Siesta", duration: 139, album_id: album_id, album_order: 5, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Jahzzar_-_05_-_Siesta.mp3")
  Song.create(title: "Echoes", duration: 199, album_id: album_id, album_order: 6, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Jahzzar_-_06_-_Echoes.mp3")
  Song.create(title: "Summercase", duration: 226, album_id: album_id, album_order: 7, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Jahzzar_-_07_-_Summercase.mp3")
  Song.create(title: "Overdose", duration: 256, album_id: album_id, album_order: 8, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Jahzzar_-_08_-_Overdose.mp3")
  Song.create(title: "So Easy", duration: 138, album_id: album_id, album_order: 9, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Jahzzar_-_09_-_So_Easy.mp3")
  Song.create(title: "April from the train", duration: 186, album_id: album_id, album_order: 10, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Jahzzar_-_10_-_April_from_the_train.mp3")
  Song.create(title: "Riots", duration: 172, album_id: album_id, album_order: 11, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Jahzzar_-_11_-_Riots.mp3")
  Song.create(title: "B-Side", duration: 207, album_id: album_id, album_order: 12, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Jahzzar_-_12_-_B-Side.mp3")
  Song.create(title: "Italia 90", duration: 202, album_id: album_id, album_order: 13, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Jahzzar_-_13_-_Italia_90.mp3")
  Song.create(title: "Before & After", duration: 264, album_id: album_id, album_order: 14, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Jahzzar_-_14_-_Before__After.mp3")

album_id = Album.find_by(title: "HiFi City Tales").id
  Song.create(title: "Take a Walk", duration: 156, album_id: album_id, album_order: 1, audio_url: "	https://s3.amazonaws.com/adagio-prod/songs/hifi_city/Jahzzar_-_01_-_Take_a_Walk.mp3")
  Song.create(title: "Vacuum", duration: 207, album_id: album_id, album_order: 2, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/hifi_city/Jahzzar_-_02_-_Vacuum.mp3")
  Song.create(title: "Bodies", duration: 146, album_id: album_id, album_order: 3, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/hifi_city/Jahzzar_-_03_-_Bodies.mp3")
  Song.create(title: "Hideaway", duration: 172, album_id: album_id, album_order: 4, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/hifi_city/Jahzzar_-_04_-_Hideaway.mp3")
  Song.create(title: "Botanic Garden", duration: 151, album_id: album_id, album_order: 5, audio_url: "	https://s3.amazonaws.com/adagio-prod/songs/hifi_city/Jahzzar_-_05_-_Botanic_Garden.mp3")
  Song.create(title: "Clocks", duration: 149, album_id: album_id, album_order: 6, audio_url: "	https://s3.amazonaws.com/adagio-prod/songs/hifi_city/Jahzzar_-_06_-_Clocks.mp3")
  Song.create(title: "Solitude", duration: 220, album_id: album_id, album_order: 7, audio_url: "	https://s3.amazonaws.com/adagio-prod/songs/hifi_city/Jahzzar_-_07_-_Solitude.mp3")
  Song.create(title: "Trap", duration: 179, album_id: album_id, album_order: 8, audio_url: "	https://s3.amazonaws.com/adagio-prod/songs/hifi_city/Jahzzar_-_08_-_Trap.mp3")
  Song.create(title: "Ruins", duration: 176, album_id: album_id, album_order: 9, audio_url: "	https://s3.amazonaws.com/adagio-prod/songs/hifi_city/Jahzzar_-_09_-_Ruins.mp3")
  Song.create(title: "Ads", duration: 133, album_id: album_id, album_order: 10, audio_url: "	https://s3.amazonaws.com/adagio-prod/songs/hifi_city/Jahzzar_-_10_-_Ads.mp3")
  Song.create(title: "Rooftop", duration: 122, album_id: album_id, album_order: 11, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/hifi_city/Jahzzar_-_11_-_Rooftop.mp3")
  Song.create(title: "Sculptures", duration: 134, album_id: album_id, album_order: 12, audio_url: "	https://s3.amazonaws.com/adagio-prod/songs/hifi_city/Jahzzar_-_12_-_Sculptures.mp3")
  Song.create(title: "Sirens", duration: 218, album_id: album_id, album_order: 13, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/hifi_city/Jahzzar_-_13_-_Sirens.mp3")
  Song.create(title: "Vault", duration: 197, album_id: album_id, album_order: 14, audio_url: "	https://s3.amazonaws.com/adagio-prod/songs/hifi_city/Jahzzar_-_14_-_Vault.mp3")

album_id = Album.find_by(title: "Wake Up").id
  Song.create(title: "Hachiko(The Faithful Dog)", duration: 185, album_id: album_id, album_order: 9, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/The_Kyoto_Connection_-_09_-_Hachiko_The_Faithtful_Dog.mp3")

album_id = Album.find_by(title: "Mystery Club").id
  Song.create(title: "Favorite Secrets", duration: 75, album_id: album_id, album_order: 2, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/02_-_Favorite_Secrets.mp3")

album_id = Album.find_by(title: "Antique Instrumentals").id
  Song.create(title: "Holiday(instrumental)", duration: 274, album_id: album_id, album_order: 1, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Silence_Is_Sexy_-_01_-_Holiday_instrumental.mp3")

album_id = Album.find_by(title: "Dance Audit Hour").id
  Song.create(title: "Chantiers Navals 412", duration: 209, album_id: album_id, album_order: 1, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/music%252Fno_curator%252FLJ_Kruzer%252FDance_Audit_Hour%252FLJ_Kruzer_-_01_-_Chantiers_Navals_412.mp3")


## PLAYLISTS, PLAYLIST SONGS, & PLAYLIST FOLLOWS
Playlist.destroy_all
PlaylistSong.destroy_all

# John Doe playlists
user_id = User.find_by(username: "johndoe").id

Playlist.create(name: "John's First Playlist", user_id: user_id)
Playlist.create(name: "John's Holiday Playlist", user_id: user_id)

playlist_id = Playlist.find_by(name: "John's First Playlist").id

song_id = Song.find_by(title: "Echoes").id
PlaylistSong.create(playlist_id: playlist_id, song_id: song_id, order: 1)
song_id = Song.find_by(title: "Hachiko(The Faithful Dog)").id
PlaylistSong.create(playlist_id: playlist_id, song_id: song_id, order: 2)
song_id = Song.find_by(title: "Favorite Secrets").id
PlaylistSong.create(playlist_id: playlist_id, song_id: song_id, order: 3)
song_id = Song.find_by(title: "Siesta").id
PlaylistSong.create(playlist_id: playlist_id, song_id: song_id, order: 4)

playlist_id = Playlist.find_by(name: "John's Holiday Playlist").id

song_id = Song.find_by(title: "Holiday(instrumental)").id
PlaylistSong.create(playlist_id: playlist_id, song_id: song_id, order: 1)
song_id = Song.find_by(title: "Chantiers Navals 412").id
PlaylistSong.create(playlist_id: playlist_id, song_id: song_id, order: 2)

# Jane Doe playlists
user_id = User.find_by(username: "janedoe").id

Playlist.create(name: "Jane's Cool Playlist", user_id: user_id)
Playlist.create(name: "Jane's Very Cool Playlist", user_id: user_id)

playlist_id = Playlist.find_by(name: "Jane's Cool Playlist").id

song_id = Song.find_by(title: "Summercase").id
PlaylistSong.create(playlist_id: playlist_id, song_id: song_id, order: 1)
song_id = Song.find_by(title: "Favorite Secrets").id
PlaylistSong.create(playlist_id: playlist_id, song_id: song_id, order: 2)
song_id = Song.find_by(title: "Hachiko(The Faithful Dog)").id
PlaylistSong.create(playlist_id: playlist_id, song_id: song_id, order: 3)
song_id = Song.find_by(title: "Chantiers Navals 412").id
PlaylistSong.create(playlist_id: playlist_id, song_id: song_id, order: 4)

playlist_id = Playlist.find_by(name: "Jane's Very Cool Playlist").id

song_id = Song.find_by(title: "Italia 90").id
PlaylistSong.create(playlist_id: playlist_id, song_id: song_id, order: 1)
song_id = Song.find_by(title: "Chantiers Navals 412").id
PlaylistSong.create(playlist_id: playlist_id, song_id: song_id, order: 2)
song_id = Song.find_by(title: "Holiday(instrumental)").id
PlaylistSong.create(playlist_id: playlist_id, song_id: song_id, order: 3)

# Jimmy Doe playlist
user_id = User.find_by(username: "jimmydoe").id

Playlist.create(name: "Jimmy's Secret Playlist", user_id: user_id)

playlist_id = Playlist.find_by(name: "Jimmy's Secret Playlist").id

song_id = Song.find_by(title: "Favorite Secrets").id
PlaylistSong.create(playlist_id: playlist_id, song_id: song_id, order: 1)
song_id = Song.find_by(title: "Favorite Secrets").id
PlaylistSong.create(playlist_id: playlist_id, song_id: song_id, order: 2)
song_id = Song.find_by(title: "Hachiko(The Faithful Dog)").id
PlaylistSong.create(playlist_id: playlist_id, song_id: song_id, order: 3)
song_id = Song.find_by(title: "Favorite Secrets").id
PlaylistSong.create(playlist_id: playlist_id, song_id: song_id, order: 4)

# 20 random playlists with 3-25 songs each, and 0-7 followers each
song_ids = Song.all.pluck(:id)

20.times do
  playlist_name = [
    Faker::Commerce.color.split(" ").map(&:capitalize).join(" "),
    Faker::Commerce.department(1),
    Faker::Commerce.product_name.split[0],
    Faker::Space.constellation
  ].shuffle.take(rand(1..4)).join(" ")

  user_id = user_ids.sample

  playlist = Playlist.create(name: playlist_name, user_id: user_id)

  rand(3..25).times do |i|
    song_id = song_ids.sample
    PlaylistSong.create(playlist_id: playlist.id, song_id: song_id, order: (i + 1))
  end

  other_users_ids = (user_ids - [user_id]).shuffle
  other_users_ids.take(rand(0..7)).each do |user_id|
    PlaylistFollow.create(playlist_id: playlist.id, follower_id: user_id)
  end

end
