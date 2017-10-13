class Api::CitiesController < ApplicationController
  def index
    @cities = City.all
    render :index
  end

  def show
    @city = City.find_by(id: params[:id])

    if @city
      @users = @city.users
      @hosts = @city.city_hosts
      @events = @city.events
      render :show
    else
      render json: "City not found", status: 422
    end
  end
end
