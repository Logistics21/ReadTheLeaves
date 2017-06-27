class Api::CitiesController < ApplicationController
  def index
    @cities = City.all
  end

  def create
    @city = City.new(city_params)

    if @city.save
      render :show
    else
      render json: @city.errors.full_messages, status: 422
    end
  end

  def show
    @city = City.find_by(id: params[:id])
    @hosts = @city.city_hosts
    @events = @city.events
    
    if @city
      render :show
    else
      render json: "City not found", status: 422
    end
  end

  private

  def city_params
    params.require(:city).permit(:name, :city_code, :description)
  end
end
