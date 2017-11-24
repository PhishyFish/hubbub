class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end

    add_column :users, :img_url, :string, null: false, default: "https://i.lensdump.com/i/VjLYH.png"
    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
  end
end
