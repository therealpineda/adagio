class Api::UserFollowsController < ApplicationController

  def create
    @follow = UserFollow.new
    user = User.find(params[:user_id])
    @follow.user_id = user.id
    follower = User.find(params[:follower_id])
    @follow.follower_id = follower.id
    @users = [user, follower]
    if @follow.save
      render 'api/users/index'
    else
      render json: { User: ['could not be followed.'] }, status: 422
    end
  end

  def destroy
    @follow = UserFollow.find(params[:id])
    @follow.destroy
    @users = [
      User.find(params[:user_id]),
      User.find(@follow.follower.id)
    ]
    render 'api/users/index'
  end

end
