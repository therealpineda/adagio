# == Schema Information
#
# Table name: playlist_follows
#
#  id          :integer          not null, primary key
#  playlist_id :integer          not null
#  follower_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistFollow < ApplicationRecord
  validates :playlist_id, :follower_id, presence: true

  belongs_to :follower,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :follower_id

  belongs_to :playlist

  
end
