# == Schema Information
#
# Table name: songs
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  duration   :integer          not null
#  album_id   :integer          not null
#  order      :integer          not null
#  audio_url  :string           not null
#  genre      :string
#  mood       :string
#  tempo      :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ApplicationRecord
  validates :title, :duration, :album_id, :album_order, :audio_url, presence: true

  belongs_to :album

  has_one :artist,
    through: :album,
    source: :artist

  has_many :playlist_songs

  has_many :playlists,
    through: :playlist_songs,
    source: :playlists




end
