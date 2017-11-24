class CreateDirectMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :direct_messages do |t|
      t.string :name, null: false

      t.timestamps
    end

    add_index :direct_messages, :name
  end
end
