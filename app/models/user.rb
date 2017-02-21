# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  image_url       :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, presence: { message: "Username cannot be blank." }
  validates :first_name, presence: { message: "First name cannot be blank." }
  validates :last_name, presence: { message: "Last name cannot be blank." }
  validates :email, presence: { message: "Email cannot be blank." }
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true, message: "Password must be at least 6 characters long." }

  after_initialize :ensure_session_token

  has_many :playlists

  has_many :user_follows,
    class_name: 'UserFollow',
    primary_key: :id,
    foreign_key: :user_id

  has_many :user_followings,
    class_name: 'UserFollow',
    primary_key: :id,
    foreign_key: :follower_id

  has_many :followers,
    through: :user_follows,
    source: :follower

  has_many :followings,
    through: :user_followings,
    source: :user

  has_many :playlist_follows,
    class_name: 'PlaylistFollow',
    primary_key: :id,
    foreign_key: :follower_id

  has_many :followed_playlists,
    through: :playlist_follows,
    source: :playlist

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user
      return user if user.is_password?(password)
    end
    nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

end
