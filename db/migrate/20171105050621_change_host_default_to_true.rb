class ChangeHostDefaultToTrue < ActiveRecord::Migration
  def change
    change_column :users, :is_host, :boolean, default: true
  end
end
