class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    @user.image_url = Faker::Avatar.image
    if @user.save
      render :show
    else
      render json: @user.errors, status: 422
    end
  end

  def show
    @user = User.includes(:followers, :followings, :playlist_follows, followed_playlists: [:followers, songs: [:album]], playlists: [:followers, songs: [:album]]).find(params[:id])
    render :show
  end

  def index
    # @users = User.all
    @users = User.includes(:followers, :followings, :playlist_follows, followed_playlists: [:followers, songs: [:album]], playlists: [:followers, songs: [:album]]).all
    render :index
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :first_name, :last_name, :email)
  end

end
