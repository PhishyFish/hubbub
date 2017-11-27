class Server < ApplicationRecord
  validates :name, :owner_id, presence: true

  has_many :channels
  has_many :members, foreign_key: :owner_id, class_name: "User"
  has_one :owner, foreign_key: :owner_id, class_name: "User"
end
