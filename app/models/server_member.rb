class ServerMember < ApplicationRecord
  validates :server_id, :member_id, presence: true
  
  belongs_to :server
  belongs_to :member, foreign_key: :member_id, class_name: "User"
end
