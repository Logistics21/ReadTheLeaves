class Attendance < ActiveRecord::Base
  validates :user_id, :event_id, presence: true
  belongs_to :user
  belongs_to :event
end
