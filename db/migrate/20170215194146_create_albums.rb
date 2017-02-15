class CreateAlbums < ActiveRecord::Migration[5.0]
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.integer :artist_id, null: false
      t.string :image_url

      t.timestamps
    end

    add_index :albums, :artist_id
  end
end
