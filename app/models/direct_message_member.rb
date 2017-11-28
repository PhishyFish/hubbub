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

class DirectMessageMember < ApplicationRecord
  validates :direct_message_id, :member_id, presence: true
  
  belongs_to :direct_message
  belongs_to :member, foreign_key: :member_id, class_name: "User"
end
