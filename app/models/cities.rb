class Cities < ActiveRecord::Base
  validates :city_code, uniqueness: true, length: { maximum: 3 }
end
