class AddSpotsToEvents < ActiveRecord::Migration
  def change
    add_column :events, :spots, :integer, default: 5
  end
end
