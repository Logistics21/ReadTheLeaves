class StaticPagesController < ApplicationController
  def root
    expires_in 24.hours, :public => true
  end
end
