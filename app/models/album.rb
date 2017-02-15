# == Schema Information
#
# Table name: albums
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  artist_id  :integer          not null
#  image_url  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord
  validates :title, :artist_id, presence: true

  belongs_to :artist
  
  has_many :songs

end
