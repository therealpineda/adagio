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
  include PgSearch

  validates :title, :artist_id, presence: true

  belongs_to :artist

  has_many :songs

  pg_search_scope :whose_title_includes,
    against: :title,
    :using => {
      :tsearch => {:prefix => true}
    }

end
