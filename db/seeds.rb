### ADAGIO DATABASE SEEDS ###

## USERS
User.destroy_all

User.create(username: 'johndoe', password: 'password', first_name: 'John', last_name: 'Doe', email: 'johndoe@email.com', image_url: Faker::Avatar.image("adagio", "100x100", "png"))
User.create(username: 'janedoe', password: 'password', first_name: 'Jane', last_name: 'Doe', email: 'janedoe@email.com', image_url: Faker::Avatar.image("adagio", "100x100", "png"))
User.create(username: 'jimmydoe', password: 'password', first_name: 'Jimmy', last_name: 'Doe', email: 'jimmydoe@email.com', image_url: Faker::Avatar.image("adagio", "100x100", "png"))

10.times do
  User.create(
    username: Faker::Pokemon.unique.name,
    password: SecureRandom::urlsafe_base64(8),
    first_name: Faker::Name.first_name,
    last_name: Faker::Music.instrument,
    email: Faker::Internet.unique.email,
    image_url: Faker::Avatar.image("adagio", "100x100", "png")
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
  "LJ Kruzer",
  "Plurabelle",
  "Holy Coast"
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

artist_id = Artist.find_by(name: "Holy Coast").id
Album.create(title: "Holy Coast", artist_id: artist_id, image_url: "https://s3.amazonaws.com/adagio-prod/images/album_art/holy_coast.jpg")

artist_id = Artist.find_by(name: "Plurabelle").id
Album.create(title: "Money, Blood and Light", artist_id: artist_id, image_url: "https://s3.amazonaws.com/adagio-prod/images/album_art/money_blood_light.jpg")

artist_id = Artist.find_by(name: "The Kyoto Connection").id
Album.create(title: "Wake Up", artist_id: artist_id, image_url: "https://s3.amazonaws.com/adagio-prod/images/album_art/kyoto.jpg")
Album.create(title: "The Middle Way", artist_id: artist_id, image_url: "https://s3.amazonaws.com/adagio-prod/images/album_art/middle_way.jpg")

artist_id = Artist.find_by(name: "Waylon Thornton").id
Album.create(title: "Mystery Club", artist_id: artist_id, image_url: "https://s3.amazonaws.com/adagio-prod/images/album_art/mystery_club.jpg")
artist_id = Artist.find_by(name: "Silence Is Sexy").id
Album.create(title: "Antique Instrumentals", artist_id: artist_id, image_url: "https://s3.amazonaws.com/adagio-prod/images/album_art/antique_instr.jpg")
artist_id = Artist.find_by(name: "LJ Kruzer").id
Album.create(title: "Dance Audit Hour", artist_id: artist_id, image_url: "https://s3.amazonaws.com/adagio-prod/images/album_art/dance_audit.jpg")


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
  Song.create(title: "Vault", duration: 197, album_id: album_id, album_order: 14, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/hifi_city/Jahzzar_-_14_-_Vault.mp3")

album_id = Album.find_by(title: "Holy Coast").id
  Song.create(title: "Theme", duration: 41, album_id: album_id, album_order: 1, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/holy_coast/Holy_Coast_-_01_-_Theme.mp3")
  Song.create(title: "San Blas", duration: 128, album_id: album_id, album_order: 2, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/holy_coast/Holy_Coast_-_02_-_San_Blas.mp3")
  Song.create(title: "Grizzly Bear Sharktopus", duration: 130, album_id: album_id, album_order: 3, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/holy_coast/Holy_Coast_-_03_-_Grizzly_Bear_Sharktopus.mp3")
  Song.create(title: "Dead Sea", duration: 154, album_id: album_id, album_order: 4, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/holy_coast/Holy_Coast_-_04_-_Dead_Sea.mp3")
  Song.create(title: "The Trench", duration: 97, album_id: album_id, album_order: 5, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/holy_coast/Holy_Coast_-_05_-_The_Trench.mp3")
  Song.create(title: "Holy Coast", duration: 120, album_id: album_id, album_order: 6, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/holy_coast/Holy_Coast_-_06_-_Holy_Coast.mp3")
  Song.create(title: "The Beach! The Beach!", duration: 136, album_id: album_id, album_order: 7, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/holy_coast/Holy_Coast_-_08_-_The_Beach_The_Beach.mp3")

album_id = Album.find_by(title: "Money, Blood and Light").id
  Song.create(title: "Lips", duration: 200, album_id: album_id, album_order: 1, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/money_blood_light/Plurabelle_-_01_-_Lips.mp3")
  Song.create(title: "Athens OH", duration: 220, album_id: album_id, album_order: 2, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/money_blood_light/Plurabelle_-_02_-_Athens_OH.mp3")
  Song.create(title: "cuts&bruises", duration: 244, album_id: album_id, album_order: 3, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/money_blood_light/Plurabelle_-_03_-_cutsbruises.mp3")
  Song.create(title: "Wallflower", duration: 248, album_id: album_id, album_order: 4, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/money_blood_light/Plurabelle_-_04_-_Wallflower.mp3")
  Song.create(title: "Light, Livid", duration: 246, album_id: album_id, album_order: 5, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/money_blood_light/Plurabelle_-_05_-_Light_Livid.mp3")
  Song.create(title: "Ropes", duration: 149, album_id: album_id, album_order: 6, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/money_blood_light/Plurabelle_-_06_-_Ropes.mp3")

album_id = Album.find_by(title: "Wake Up").id
  Song.create(title: "Hachiko(The Faithful Dog)", duration: 185, album_id: album_id, album_order: 9, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/The_Kyoto_Connection_-_09_-_Hachiko_The_Faithtful_Dog.mp3")

album_id = Album.find_by(title: "The Middle Way").id
  Song.create(title: "Intro", duration: 126, album_id: album_id, album_order: 1, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/middle_way/The_Kyoto_Connection_-_01_-_Intro.mp3")
  Song.create(title: "Close To The Abyss", duration: 334, album_id: album_id, album_order: 2, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/middle_way/The_Kyoto_Connection_-_02_-_Close_To_The_Abyss.mp3")
  Song.create(title: "Voyage I - Setting Sun", duration: 300, album_id: album_id, album_order: 3, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/middle_way/The_Kyoto_Connection_-_03_-_Voyage_I_-_Setting_Sun.mp3")
  Song.create(title: "Fears", duration: 263, album_id: album_id, album_order: 4, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/middle_way/The_Kyoto_Connection_-_04_-_Fears.mp3")
  Song.create(title: "Voyage II - The Hero's Journey", duration: 350, album_id: album_id, album_order: 5, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/middle_way/The_Kyoto_Connection_-_05_-_Voyage_II_-_The_Heros_Journey.mp3")
  Song.create(title: "Kuro Obi (lost mixtape)", duration: 106, album_id: album_id, album_order: 6, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/middle_way/The_Kyoto_Connection_-_06_-_Kuro_Obi_lost_mixtape.mp3")
  Song.create(title: "Decisions | Illusions | Confusions", duration: 275, album_id: album_id, album_order: 7, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/middle_way/The_Kyoto_Connection_-_07_-_Decisions__Illusions__Confusions.mp3")
  Song.create(title: "Voyage III - Finding The Way Out", duration: 203, album_id: album_id, album_order: 8, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/middle_way/The_Kyoto_Connection_-_08_-_Voyage_III_-_Finding_The_Way_Out.mp3")
  Song.create(title: "Wake Up (2016 Tech Noir ver.)", duration: 241, album_id: album_id, album_order: 9, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/middle_way/The_Kyoto_Connection_-_09_-_Wake_Up_2016_Tech_Noir_ver.mp3")

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
    Faker::Hipster.word.capitalize,
    Faker::Hipster.word.capitalize,
    Faker::Commerce.product_name.split[0],
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
