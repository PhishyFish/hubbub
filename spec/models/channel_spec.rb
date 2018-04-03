require 'rails_helper'

RSpec.describe Channel, type: :model do
  describe 'associations' do
    it { should belong_to(:server) }
    it { should have_many(:messages) }
    it { should have_many(:members).through(:server) }
  end

  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:server_id) }
  end
end
