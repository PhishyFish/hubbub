class DirectMessageMember < ApplicationRecord
  belongs_to :direct_message
  belongs_to :member, foreign_key: :member_id, class_name: "User"
end
