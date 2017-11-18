class ChangeEventDateToDateTime < ActiveRecord::Migration
  def up
    remove_column :events, :date
    add_column :events, :date, :datetime
    Event.update_all(date: DateTime.now)
  end

  def down
    remove_column :events, :date
    add_column :events, :date, :string
  end
end
