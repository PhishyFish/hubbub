# == Schema Information
#
# Table name: messages
#
#  id               :integer          not null, primary key
#  body             :text             not null
#  author_id        :integer          not null
#  messageable_type :string
#  messageable_id   :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Message < ApplicationRecord
  validates :body, :author_id, :messageable_id, :messageable_type, presence: true

  belongs_to :messageable, polymorphic: true
  belongs_to :author, foreign_key: :author_id, class_name: "User"
end
