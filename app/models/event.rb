class Event < ActiveRecord::Base
  validates :date, :address, :city_id, :host_id, presence: true

  has_many :attendances, dependent: :destroy

  has_many :users,
  through: :attendances,
  source: :user

  belongs_to :city

  belongs_to :host,
    class_name: "User",
    primary_key: :id,
    foreign_key: :host_id
end
