require 'rails_helper'

RSpec.describe Server, type: :model do
  describe 'associations' do
    it { should have_many(:channels) }
    it { should have_many(:server_members) }
    it { should have_many(:members).through(:server_members) }
    it { should belong_to(:owner) }
  end

  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:owner_id) }
  end
end
