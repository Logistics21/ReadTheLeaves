class Event < ActiveRecord::Base
  validates :date, :address, :city_id, :host_id, presence: true

  has_many :attendances, dependent: :destroy

  has_many :users,
  through: :attendances,
  source: :users

  belongs_to :city

  has_one :host,
    class_name: "User",
    primary_key: :id,
    foreign_key: :id,
    dependent: :destroy
end
