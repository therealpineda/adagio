# == Schema Information
#
# Table name: user_follows
#
#  id          :integer          not null, primary key
#  follower_id :integer          not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class UserFollow < ApplicationRecord
  validates :user_id, :follower_id, presence: true

  belongs_to :user,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :follower,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :follower_id

end
