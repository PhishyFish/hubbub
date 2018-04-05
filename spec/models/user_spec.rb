require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'associations' do
    it { should have_many(:messages) }
    it { should have_many(:direct_message_members) }
    it { should have_many(:direct_messages).through(:direct_message_members) }
    it { should have_many(:server_members) }
    it { should have_many(:servers).through(:server_members) }
    it { should have_many(:owned_servers) }
  end

  describe 'validations' do
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:session_token) }
    it { should validate_presence_of(:img_url) }
    it { should validate_length_of(:password).is_at_least(6) }

    subject {
      User.new(
        username: Faker::Internet.user_name,
        password: Faker::Internet.password(6)
      )
    }
    it { should validate_uniqueness_of(:username) }
    it { should validate_uniqueness_of(:session_token) }
  end

  describe 'password encryption' do
    it 'should not save password to database' do
      User.create!(
        username: "Sneezer",
        password: "blessyou"
      )

      user = User.find_by(username: "Sneezer")
      expect(user.password).not_to be("blessyou")
    end
  end
end
