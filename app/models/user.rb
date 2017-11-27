class User < ApplicationRecord
  attr_reader :password

  validates :username, :password_digest, :session_token, :img_url, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :messages, foreign_key: :author_id
  has_many :direct_message_members, foreign_key: :member_id
  has_many :direct_messages, through: :direct_message_members, source: :direct_message
  has_many :server_members, foreign_key: :member_id
  has_many :servers, through: :server_members, source: :server

  after_initialize :ensure_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    generate_unique_token
    self.save!
    self.session_token
  end

  private

  def ensure_token
    generate_unique_token unless self.session_token
  end

  def new_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_token
    self.session_token = new_token

    while User.find_by(session_token: self.session_token)
      self.session_token = new_token
    end

    self.session_token
  end
end
