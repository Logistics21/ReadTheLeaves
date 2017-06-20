class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :first_name, null: false
      t.string :password_digest, null: false
      t.string :last_name
      t.string :city_id
      t.timestamps null: false
    end
  end
end
