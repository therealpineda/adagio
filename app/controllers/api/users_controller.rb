class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      render :show
    else
      render json: @user.errors, status: 422
    end
  end

  def show
    @user = User.includes(playlists: [songs: [:artist]]).find(params[:id])
    render :show
  end

  def index
    @users = User.all
    render :index
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :first_name, :last_name, :email)
  end

end
