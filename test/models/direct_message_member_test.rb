# == Schema Information
#
# Table name: direct_message_members
#
#  id                :integer          not null, primary key
#  direct_message_id :integer          not null
#  member_id         :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

require 'test_helper'

class DirectMessageMemberTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
