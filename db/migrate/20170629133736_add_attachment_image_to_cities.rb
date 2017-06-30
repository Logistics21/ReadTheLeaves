class AddAttachmentImageToCities < ActiveRecord::Migration
  def self.up
    change_table :cities do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :cities, :image
  end
end
