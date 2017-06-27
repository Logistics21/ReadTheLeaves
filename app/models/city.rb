class City < ActiveRecord::Base
  validates :city_code, uniqueness: true, length: { maximum: 3 }

  has_many :events
  has_many :users

  def city_events
    self.events


  end

  def city_hosts
    hosts = self.users.where(is_host: true)
  end
end
