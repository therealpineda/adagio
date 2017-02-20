import React from 'react';
import UserPlaylistIndex from './user_playlist_index'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { playSongs } from '../../actions/play_queue_actions';

class UserDetail extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    if (this.props.user) {
      return (
        <div id='user-detail' className='comp-d'>
          <div id='user-detail-header'>
            <div id='user-detail-header-top'>
              <div className='user-detail-img'>
                <i className="fa fa-user-circle-o" aria-hidden="true"></i>
              </div>
              <div id='user-detail-right'>
                <div id='user-detail-text'>
                  <div id='user-detail-user'>
                    <p>USER</p>
                  </div>
                  <div id='user-detail-title'>
                    <p>{this.props.user.first_name} {this.props.user.last_name}</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="user-detail-buttons">
              <button
                id="user-detail-follow-btn"
                onClick={console.log()}>Follow</button>
            </div>
        </div>
          <div id="playlist-detail-user">
               <p>{this.props.user.playlists.length} playlists &#8226; 0 followers</p>
          </div>
          <div className="user-detail-sub-header">
            <p>Public Playlists</p>
          </div>
          <div id='user-playlists-index-container'>
            <UserPlaylistIndex playlists={this.props.user.playlists} />
          </div>
          <div className="user-detail-sub-header">
            <p>Following</p>
          </div>
          <div id='user-following-index-container'>
    
          </div>
        </div>
      );
    } else {
      return (
        <div id='playlist-detail' className='comp-d'>
          <p>Choose a user...</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDetail));
