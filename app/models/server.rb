# == Schema Information
#
# Table name: servers
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  img_url    :string
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Server < ApplicationRecord
  validates :name, :owner_id, presence: true

  has_many :channels
  has_many :server_members
  has_many :members, through: :server_members, source: :member
  belongs_to :owner, foreign_key: :owner_id, class_name: "User"
end
