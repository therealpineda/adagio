import React from 'react';
import { connect } from 'react-redux';
import SongsIndex from '../songs_index';
import { fetchPlaylists } from '../../../actions/playlist_actions';
import { userSongsArray } from '../../../reducers/selectors';
import { Spinner } from '../../spinners.jsx'

class Songs extends React.Component {
  constructor() {
    super();
    this.state = {
      fetching: true,
    };
  }

  componentWillMount() {
    this.props.fetchPlaylists(this.props.userId).then(() => {
      this.setState({ fetching: false });
    });
  }

  render() {
    if (this.state.fetching) return <Spinner />;
    return (
      <div
        id="my-music-songs-container"
        className="custom-scrollbar"
      >
        <SongsIndex songs={this.props.songs} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const userId = state.session.currentUser.id;
  const songs = userSongsArray(state);
  return {
    userId,
    songs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlaylists: (userId) => { return dispatch(fetchPlaylists(userId)); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Songs);
