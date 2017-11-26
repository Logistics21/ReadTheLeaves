require File.expand_path('../boot', __FILE__)

require 'rails/all'

Bundler.require(*Rails.groups)

ENV["REDISTOGO_URL"] = 'redis://redistogo:5ac41c1aef333d1811eedd11015dfe5e@grouper.redistogo.com:11649/'

module ReadTheLeaves
  class Application < Rails::Application

    config.paperclip_defaults = {
      :storage => :s3,
      :s3_protocol => :https,
      :s3_credentials => {
      :bucket => ENV["s3_bucket"],
      :access_key_id => ENV["s3_access_key_id"],
      s3_host_name: "s3-#{ENV['s3_region']}.amazonaws.com",
      :secret_access_key => ENV["s3_secret_access_key"],
      :s3_region => ENV["s3_region"],
      :url => ":s3_host_name"
    }
  }
    config.active_record.raise_in_transactional_callbacks = true
  end
end

if ENV["REDISTOGO_URL"]
  config = ReadTheLeaves::Application.config
  uri = URI.parse(ENV["REDISTOGO_URL"])

  config.cache_store = [
    :redis_store, {
      :host => uri.host,
      :port => uri.port,
      :password => uri.password,
      :namespace => "cache"
    }
  ]
end
