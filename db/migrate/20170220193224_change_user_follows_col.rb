class ChangeUserFollowsCol < ActiveRecord::Migration[5.0]
  def change
    rename_column :user_follows, :following_id, :user_id
  end
end
