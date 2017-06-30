class City < ActiveRecord::Base
  validates :city_code, uniqueness: true, length: { maximum: 3 }

  has_attached_file :image, default_url: "chi.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :events
  has_many :users

  def city_events
    self.events
  end

  def city_hosts
    hosts = self.users.where(is_host: true)
  end
end
