class RemoveIndexAndAddSpots < ActiveRecord::Migration
  def change
    add_column :events, :spots, :integer, default: 5
  end

  def change
    remove_index :attendances, ["user_id", "event_id"]
  end
end
