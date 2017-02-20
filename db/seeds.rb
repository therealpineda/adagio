User.destroy_all
User.create(username: 'johndoe', password: 'password', first_name: 'John', last_name: 'Doe', email: 'johndoe@email.com')
User.create(username: 'janedoe', password: 'password', first_name: 'Jane', last_name: 'Doe', email: 'janedoe@email.com')
User.create(username: 'jimmydoe', password: 'password', first_name: 'Jimmy', last_name: 'Doe', email: 'jimmydoe@email.com')


Artist.destroy_all
Artist.create(name: "Jahzzar", image_url: "https://s3.amazonaws.com/adagio-prod/images/default/artist_img.jpg")
Artist.create(name: "The Kyoto Connection", image_url: "https://s3.amazonaws.com/adagio-prod/images/default/artist_img.jpg")
Artist.create(name: "Waylon Thornton", image_url: "https://s3.amazonaws.com/adagio-prod/images/default/artist_img.jpg")
Artist.create(name: "Silence Is Sexy", image_url: "https://s3.amazonaws.com/adagio-prod/images/default/artist_img.jpg")
Artist.create(name: "LJ Kruzer", image_url: "https://s3.amazonaws.com/adagio-prod/images/default/artist_img.jpg")


Album.destroy_all
artist_id = Artist.find_by(name: "Jahzzar").id
Album.create(title: "Traveller's Guide", artist_id: artist_id, image_url: "https://s3.amazonaws.com/adagio-prod/images/album_art/travellers_guide.jpg")

artist_id = Artist.find_by(name: "The Kyoto Connection").id
Album.create(title: "Wake Up", artist_id: artist_id, image_url: "https://s3.amazonaws.com/adagio-prod/images/default/album_img.jpg")
artist_id = Artist.find_by(name: "Waylon Thornton").id
Album.create(title: "Mystery Club", artist_id: artist_id, image_url: "https://s3.amazonaws.com/adagio-prod/images/default/album_img.jpg")
artist_id = Artist.find_by(name: "Silence Is Sexy").id
Album.create(title: "Antique Instrumentals", artist_id: artist_id, image_url: "https://s3.amazonaws.com/adagio-prod/images/default/album_img.jpg")
artist_id = Artist.find_by(name: "LJ Kruzer").id
Album.create(title: "Dance Audit Hour", artist_id: artist_id, image_url: "https://s3.amazonaws.com/adagio-prod/images/default/album_img.jpg")

Song.destroy_all
album_id = Album.find_by(title: "Traveller's Guide").id
travellers_guide_songs = [
  Song.create(title: "Out of School", duration: 214, album_id: album_id, album_order: 1, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Jahzzar_-_01_-_Out_of_School.mp3"),
  Song.create(title: "FM", duration: 135, album_id: album_id, album_order: 2, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Jahzzar_-_02_-_FM.mp3"),
  Song.create(title: "Fireworks", duration: 229, album_id: album_id, album_order: 3, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Jahzzar_-_03_-_Fireworks.mp3"),
  Song.create(title: "Storyteller", duration: 304, album_id: album_id, album_order: 4, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Jahzzar_-_04_-_Storyteller.mp3"),
  Song.create(title: "Siesta", duration: 139, album_id: album_id, album_order: 5, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Jahzzar_-_05_-_Siesta.mp3"),
  Song.create(title: "Echoes", duration: 199, album_id: album_id, album_order: 6, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Jahzzar_-_06_-_Echoes.mp3"),
  Song.create(title: "Summercase", duration: 226, album_id: album_id, album_order: 7, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Jahzzar_-_07_-_Summercase.mp3"),
  Song.create(title: "Overdose", duration: 256, album_id: album_id, album_order: 8, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Jahzzar_-_08_-_Overdose.mp3"),
  Song.create(title: "So Easy", duration: 138, album_id: album_id, album_order: 9, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Jahzzar_-_09_-_So_Easy.mp3"),
  Song.create(title: "April from the train", duration: 186, album_id: album_id, album_order: 10, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Jahzzar_-_10_-_April_from_the_train.mp3"),
  Song.create(title: "Riots", duration: 172, album_id: album_id, album_order: 11, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Jahzzar_-_11_-_Riots.mp3"),
  Song.create(title: "B-Side", duration: 207, album_id: album_id, album_order: 12, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Jahzzar_-_12_-_B-Side.mp3"),
  Song.create(title: "Italia 90", duration: 202, album_id: album_id, album_order: 13, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Jahzzar_-_13_-_Italia_90.mp3"),
  Song.create(title: "Before & After", duration: 264, album_id: album_id, album_order: 14, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Jahzzar_-_14_-_Before__After.mp3")
]


album_id = Album.find_by(title: "Wake Up").id
Song.create(title: "Hachiko(The Faithful Dog)", duration: 185, album_id: album_id, album_order: 9, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/The_Kyoto_Connection_-_09_-_Hachiko_The_Faithtful_Dog.mp3")
album_id = Album.find_by(title: "Mystery Club").id
Song.create(title: "Favorite Secrets", duration: 75, album_id: album_id, album_order: 2, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/02_-_Favorite_Secrets.mp3")
album_id = Album.find_by(title: "Antique Instrumentals").id
Song.create(title: "Holiday(instrumental)", duration: 274, album_id: album_id, album_order: 1, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Silence_Is_Sexy_-_01_-_Holiday_instrumental.mp3")
album_id = Album.find_by(title: "Dance Audit Hour").id
Song.create(title: "Chantiers Navals 412", duration: 209, album_id: album_id, album_order: 1, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/music%252Fno_curator%252FLJ_Kruzer%252FDance_Audit_Hour%252FLJ_Kruzer_-_01_-_Chantiers_Navals_412.mp3")


Playlist.destroy_all
PlaylistSong.destroy_all

user_id = User.find_by(username: "johndoe").id

Playlist.create(name: "John's Amazing Playlist", user_id: user_id)
Playlist.create(name: "John's Amazing Other Playlist", user_id: user_id)

playlist_id = Playlist.find_by(name: "John's Amazing Playlist").id

song_id = Song.find_by(title: "Echoes").id
PlaylistSong.create(playlist_id: playlist_id, song_id: song_id, order: 1)
song_id = Song.find_by(title: "Hachiko(The Faithful Dog)").id
PlaylistSong.create(playlist_id: playlist_id, song_id: song_id, order: 2)
song_id = Song.find_by(title: "Favorite Secrets").id
PlaylistSong.create(playlist_id: playlist_id, song_id: song_id, order: 3)
song_id = Song.find_by(title: "Siesta").id
PlaylistSong.create(playlist_id: playlist_id, song_id: song_id, order: 4)

playlist_id = Playlist.find_by(name: "John's Amazing Other Playlist").id

song_id = Song.find_by(title: "Holiday(instrumental)").id
PlaylistSong.create(playlist_id: playlist_id, song_id: song_id, order: 1)
song_id = Song.find_by(title: "Chantiers Navals 412").id
PlaylistSong.create(playlist_id: playlist_id, song_id: song_id, order: 2)


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
