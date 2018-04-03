require 'rails_helper'

RSpec.describe DirectMessage, type: :model do
  describe 'associations' do
    it { should have_many(:messages) }
    it { should have_many(:direct_message_members) }
    it { should have_many(:members).through(:direct_message_members) }
  end

  describe 'validations' do
    it { should validate_presence_of(:name) }
  end
end
