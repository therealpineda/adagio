# == Schema Information
#
# Table name: playlists
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
  include PgSearch

  validates :name, :user_id, presence: true

  belongs_to :user

  has_many :playlist_songs

  has_many :songs,
    through: :playlist_songs,
    source: :song

  has_many :playlist_follows,
    class_name: 'PlaylistFollow',
    primary_key: :id,
    foreign_key: :playlist_id

  has_many :followers,
    through: :playlist_follows,
    source: :follower

  pg_search_scope :whose_name_includes,
    against: :name,
    :using => {
      :tsearch => {:prefix => true}
  }

end
