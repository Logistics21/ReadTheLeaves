class AddCityCodeAndCityNameToUsers < ActiveRecord::Migration
  def change
    add_column :users, :city_code, :string
    add_column :users, :city_name, :string
  end
end
