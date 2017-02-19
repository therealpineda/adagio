class ChangeSongOrderColumn < ActiveRecord::Migration[5.0]
  def change
    rename_column :songs, :order, :album_order
  end
end
