require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module ReadTheLeaves
  class Application < Rails::Application
    config.assets.enabled = true
    config.assets.paths << Rails.root.join("app", "assets", "fonts") 
    config.active_record.raise_in_transactional_callbacks = true
  end
end
