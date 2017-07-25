class City < ActiveRecord::Base
  validates :city_code, uniqueness: true, length: { maximum: 3 }

  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :events
  has_many :users

  def city_hosts
    @hosts = self.users.where(is_host: true)
  end
end
