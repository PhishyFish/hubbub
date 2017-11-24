class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.text :body, null: false
      t.integer :author_id, null: false
      t.references :messageable, polymorphic: true, index: true

      t.timestamps
    end

    add_index :messages, :author_id
  end
end
