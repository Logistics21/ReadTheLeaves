class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.datetime :date, null: false
      t.string :address, null: false
      t.string :description
      t.integer :city_id, null: false
      t.integer :host_id, null: false
      t.timestamps null: false
    end
  end
end
