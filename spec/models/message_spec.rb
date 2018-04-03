require 'rails_helper'

RSpec.describe Message, type: :model do
  describe 'associations' do
    it { should belong_to(:messageable) }
    it { should belong_to(:author) }
  end

  describe 'validations' do
    it { should validate_presence_of(:body) }
    it { should validate_presence_of(:author_id) }
    it { should validate_presence_of(:messageable_id) }
    it { should validate_presence_of(:messageable_type) }
  end
end
