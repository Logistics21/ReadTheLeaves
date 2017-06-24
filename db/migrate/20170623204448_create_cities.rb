class CreateCities < ActiveRecord::Migration
  def change
    create_table :cities do |t|
      t.string :name
      t.string :city_code, limit: 3
      t.text :description
    end
  end
end
