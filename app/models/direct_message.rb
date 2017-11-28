# == Schema Information
#
# Table name: direct_messages
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class DirectMessage < ApplicationRecord
  validates :name, presence: true

  has_many :messages, as: :messageable
  has_many :direct_message_members
  has_many :members, through: :direct_message_members, source: :member
end
