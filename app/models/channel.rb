class Channel < ApplicationRecord
  validates :name, :server_id, presence: true

  belongs_to :server
  has_many :messages, as: :messageable
  has_many :members, through: :server, source: :members
end
