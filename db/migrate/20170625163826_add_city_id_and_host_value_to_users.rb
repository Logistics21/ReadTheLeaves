class AddCityIdAndHostValueToUsers < ActiveRecord::Migration
  def change
    remove_column :users, :city_id
    add_column :users, :is_host, :boolean, default: false
  end
end
