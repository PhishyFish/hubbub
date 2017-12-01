class Api::UsersController < ApplicationController
  def index
    if params[:serverId] == "@me"
      @users = User.where.not(id: current_user.id)
    else
      @users = Server.find(params[:serverId]).members
    end

    render :index
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :img_url)
  end
end
