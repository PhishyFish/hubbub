class DirectMessageMember < ApplicationRecord
  validates :direct_message_id, :member_id, presence: true
  
  belongs_to :direct_message
  belongs_to :member, foreign_key: :member_id, class_name: "User"
end
