# == Schema Information
#
# Table name: server_members
#
#  id         :integer          not null, primary key
#  server_id  :integer          not null
#  member_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ServerMember < ApplicationRecord
  validates :server_id, :member_id, presence: true
  
  belongs_to :server
  belongs_to :member, foreign_key: :member_id, class_name: "User"
end
