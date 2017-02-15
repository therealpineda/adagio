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

require 'test_helper'

class SongTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
