class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render "api/users/show"
    else
      render json: ["Invalid email or password"], status: 401
    end
  end

  def destroy
    @user = current_user

    if @user
      signout!
      render "api/users/show"
    else
      render json: ["You are not currently signed in"], status: 401
    end
  end
end
