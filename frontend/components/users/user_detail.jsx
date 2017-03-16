import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import UserPlaylistIndex from './user_playlist_index';
import UserFollowingIndex from './user_following_index';
import { followUser, unfollowUser } from '../../actions/users_actions';

class UserDetail extends React.Component {
  constructor() {
    super();
    this._followUser = this._followUser.bind(this);
    this._unfollowUser = this._unfollowUser.bind(this);
  }

  _followUser() {
    const followerId = this.props.currentUser.id;
    const followingId = parseInt(this.props.params.userId, 10);
    this.props.followUser(followerId, followingId);
  }

  _unfollowUser(id) {
    const followingId = parseInt(this.props.params.userId, 10);
    this.props.unfollowUser(followingId, id);
  }


  render() {
    if (this.props.user) {
      let followButton = (
        <button
          id="user-detail-follow-btn"
          onClick={this._followUser}
        >
          Follow
        </button>
      );
      if (this.props.user.id === this.props.currentUser.id) {
        followButton = (
          <button id="user-detail-follow-btn-you">
            You
          </button>
        );
      }
      if (this.props.user.following) {
        const id = this.props.user.following;
        followButton = (
          <button
            id="user-detail-follow-btn"
            onClick={this._unfollowUser.bind(this, id)}
          >
            Unfollow
          </button>);
      }

      let userImage = (
        <div className="user-detail-img">
          <i className="fa fa-user-circle-o" aria-hidden="true"></i>
        </div>
      );

      if (this.props.user.image_url) {
        userImage = (
          <div className="user-detail-img">
            <img src={this.props.user.image_url} alt={this.props.user.name} />
          </div>
        );
      }

      return (
        <div id="user-detail">
          <div id="user-detail-header">
            <div id="user-detail-header-top">
              { userImage }
              <div id="user-detail-right">
                <div id="user-detail-text">
                  <div className="detail-type-header">
                    <p>User</p>
                  </div>
                  <div id="user-detail-title">
                    <p>{this.props.user.name}</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="user-detail-buttons">
              { followButton }
            </div>
          </div>
          <div id="playlist-detail-user">
            <p>
              {this.props.user.playlists.length} playlists &#8226; {this.props.user.followers_count}
            </p>
          </div>
          <div className="user-detail-sub-header">
            <p>Public Playlists</p>
          </div>
          <div id="user-playlists-index-container">
            <UserPlaylistIndex playlists={this.props.user.playlists} />
          </div>
          <div className="user-detail-sub-header">
            <p>Following</p>
          </div>
          <div id="user-following-index-container">
            <UserFollowingIndex followings={this.props.user.followings} />
          </div>
        </div>
      );
    }
    return (
      <div id="playlist-detail">
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (followerId, followingId) => { dispatch(followUser(followerId, followingId)); },
    unfollowUser: (followingId, followId) => { dispatch(unfollowUser(followingId, followId)); },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDetail));
