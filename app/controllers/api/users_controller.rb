class Api::UsersController < ApplicationController
  # def index
  #   @city = City.find_by(city_id: params[:city_id])
  #   if @city.users
  #     render json: @city.users
  #   else
  #     render json: @city.errors.full_messages, status: 422
  #   end
  # end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(params[:id])
    if @user
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by(id: params[:id])

    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  private
  def user_params
    params.require(:user).permit(:email, :first_name, :password, :last_name, :city_code, :city_name, :city_id, :is_host)
  end
end
