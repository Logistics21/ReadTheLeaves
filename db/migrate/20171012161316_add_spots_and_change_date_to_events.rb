class AddSpotsAndChangeDateToEvents < ActiveRecord::Migration
  def change
    add_column :events, :spots, :integer, default: 5
  end

  def change
    change_column :events, :date, :string
  end
end
