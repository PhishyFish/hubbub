# == Schema Information
#
# Table name: channels
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  server_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Channel < ApplicationRecord
  validates :name, :server_id, presence: true

  belongs_to :server
  has_many :messages, as: :messageable
  has_many :members, through: :server, source: :members
end
