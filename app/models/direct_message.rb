class DirectMessage < ApplicationRecord
  validates :name, presence: true

  has_many :messages, as: :messageable
  has_many :direct_message_members
  has_many :members, through: :direct_message_members, source: :member
end
