User.destroy_all
User.create(username: 'johndoe', password: 'password', first_name: 'John', last_name: 'Doe', email: 'johndoe@email.com')


Artist.destroy_all
Artist.create(name: "Jahzzar", image_url: "https://s3.amazonaws.com/adagio-prod/images/default/artist_img.jpg")
Artist.create(name: "The Kyoto Connection", image_url: "https://s3.amazonaws.com/adagio-prod/images/default/artist_img.jpg")
Artist.create(name: "Waylon Thornton", image_url: "https://s3.amazonaws.com/adagio-prod/images/default/artist_img.jpg")
Artist.create(name: "Silence Is Sexy", image_url: "https://s3.amazonaws.com/adagio-prod/images/default/artist_img.jpg")
Artist.create(name: "LJ Kruzer", image_url: "https://s3.amazonaws.com/adagio-prod/images/default/artist_img.jpg")


Album.destroy_all
artist_id = Artist.find_by(name: "Jahzzar").id
Album.create(title: "Traveller's Guide", artist_id: artist_id, image_url: "https://s3.amazonaws.com/adagio-prod/images/default/album_img.jpg")
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
Song.create(title: "Siesta", duration: 139, album_id: album_id, order: 5, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Jahzzar_-_05_-_Siesta.mp3")
album_id = Album.find_by(title: "Wake Up").id
Song.create(title: "Hachiko(The Faithful Dog)", duration: 185, album_id: album_id, order: 9, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/The_Kyoto_Connection_-_09_-_Hachiko_The_Faithtful_Dog.mp3")
album_id = Album.find_by(title: "Mystery Club").id
Song.create(title: "Favorite Secrets", duration: 75, album_id: album_id, order: 2, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/02_-_Favorite_Secrets.mp3")
album_id = Album.find_by(title: "Antique Instrumentals").id
Song.create(title: "Holiday(instrumental)", duration: 274, album_id: album_id, order: 1, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/Silence_Is_Sexy_-_01_-_Holiday_instrumental.mp3")
album_id = Album.find_by(title: "Dance Audit Hour").id
Song.create(title: "Chantiers Navals 412", duration: 209, album_id: album_id, order: 1, audio_url: "https://s3.amazonaws.com/adagio-prod/songs/music%252Fno_curator%252FLJ_Kruzer%252FDance_Audit_Hour%252FLJ_Kruzer_-_01_-_Chantiers_Navals_412.mp3")



user_id = User.find_by(username: "johndoe").id

Playlist.destroy_all
Playlist.create(name: "John's Amazing Playlist", user_id: user_id)
Playlist.create(name: "John's Amazing Other Playlist", user_id: user_id)

PlaylistSong.destroy_all

playlist_id = Playlist.find_by(name: "John's Amazing Playlist").id
song_id = Song.find_by(title: "Siesta").id
PlaylistSong.create(playlist_id: playlist_id, song_id: song_id, order: 1)
song_id = Song.find_by(title: "Hachiko(The Faithful Dog)").id
PlaylistSong.create(playlist_id: playlist_id, song_id: song_id, order: 2)
song_id = Song.find_by(title: "Favorite Secrets").id
PlaylistSong.create(playlist_id: playlist_id, song_id: song_id, order: 3)

playlist_id = Playlist.find_by(name: "John's Amazing Other Playlist").id
song_id = Song.find_by(title: "Holiday(instrumental)").id
PlaylistSong.create(playlist_id: playlist_id, song_id: song_id, order: 1)
song_id = Song.find_by(title: "Chantiers Navals 412").id
PlaylistSong.create(playlist_id: playlist_id, song_id: song_id, order: 2)
