# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170316181058) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.string   "title",      null: false
    t.integer  "artist_id",  null: false
    t.string   "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artist_id"], name: "index_albums_on_artist_id", using: :btree
  end

  create_table "artists", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pg_search_documents", force: :cascade do |t|
    t.text     "content"
    t.string   "searchable_type"
    t.integer  "searchable_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["searchable_type", "searchable_id"], name: "index_pg_search_documents_on_searchable_type_and_searchable_id", using: :btree
  end

  create_table "playlist_follows", force: :cascade do |t|
    t.integer  "playlist_id", null: false
    t.integer  "follower_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "playlist_songs", force: :cascade do |t|
    t.integer  "playlist_id", null: false
    t.integer  "song_id",     null: false
    t.integer  "order",       null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["playlist_id"], name: "index_playlist_songs_on_playlist_id", using: :btree
    t.index ["song_id"], name: "index_playlist_songs_on_song_id", using: :btree
  end

  create_table "playlists", force: :cascade do |t|
    t.string   "name",       null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_playlists_on_user_id", using: :btree
  end

  create_table "songs", force: :cascade do |t|
    t.string   "title",       null: false
    t.integer  "duration",    null: false
    t.integer  "album_id",    null: false
    t.integer  "album_order", null: false
    t.string   "audio_url",   null: false
    t.string   "genre"
    t.string   "mood"
    t.integer  "tempo"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["album_id"], name: "index_songs_on_album_id", using: :btree
  end

  create_table "user_follows", force: :cascade do |t|
    t.integer  "follower_id", null: false
    t.integer  "user_id",     null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "first_name",      null: false
    t.string   "last_name",       null: false
    t.string   "email",           null: false
    t.string   "image_url"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
