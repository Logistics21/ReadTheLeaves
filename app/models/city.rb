class City < ActiveRecord::Base
  validates :city_code, uniqueness: true, length: { maximum: 3 }

  # has_many :events
end
