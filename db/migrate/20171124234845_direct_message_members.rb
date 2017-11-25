class DirectMessageMembers < ActiveRecord::Migration[5.1]
  def change
    create_table :direct_message_members do |t|
      t.integer :direct_message_id, null: false
      t.integer :member_id, null: false

      t.timestamps
    end

    add_index :direct_message_members, [:direct_message_id, :member_id], unique: true
  end
end
