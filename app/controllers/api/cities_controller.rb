class Api::CitiesController < ApplicationController
  def index
  end

  def create
  end

  def new
  end

  def edit
  end

  def show
  end

  def update
  end

  private

  def city_params
    params.require(:city).permit(:name, :city_code, :description)
  end
end
