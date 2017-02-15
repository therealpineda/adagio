class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.integer :duration, null: false
      t.integer :album_id, null: false
      t.integer :order, null: false
      t.string :audio_url, null: false
      t.string :genre
      t.string :mood
      t.integer :tempo

      t.timestamps
    end

    add_index :songs, :album_id
  end
end
