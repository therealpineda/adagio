class ChangeNameForArtists < ActiveRecord::Migration[5.0]
  def change
    change_column :artists, :name, :string, presence: true
  end
end
