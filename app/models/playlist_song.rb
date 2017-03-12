# == Schema Information
#
# Table name: playlist_songs
#
#  id          :integer          not null, primary key
#  playlist_id :integer          not null
#  song_id     :integer          not null
#  order       :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistSong < ApplicationRecord
  validates :playlist_id, :song_id, :order, presence: true

  belongs_to :playlist

  belongs_to :song

  has_one :user,
    through: :playlist,
    source: :user

end
