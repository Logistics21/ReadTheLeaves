class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if user.save
      login!(@user)
      render :show
    else
      render :json @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by
    if @user
      render :show
    else
      render :json @user.errors.full_messages, status: 422
    end
  end

  def update
  end

  def destroy
  end

  private
  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :city_id)
  end
end
