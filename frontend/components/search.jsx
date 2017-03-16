import React from 'react';
import { connect } from 'react-redux';
import { searchDatabase } from '../actions/search_actions';

class Search extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   input: '',
    // };
    this._searching = this._searching.bind(this);
    this.preventDefault = this.preventDefault.bind(this);
  }

  _searching(e) {
    if (e.target.value.length > 2) {
      this.props.searchDatabase(e.target.value);
    }
  }
  // this.setState({ input: e.target.value });

  preventDefault(e) {
    e.preventDefault();
  }

  // debugger;
  render() {
    const albums = this.props.albums.map((album) => {
      return (
        <p key={album.searchable_id}>{album.content}</p>
      );
    });

    return (
      <div id="search" className="comp">
        <h6>Search</h6>
        <form onSubmit={this.preventDefault}>
          <label htmlFor="search">Search: </label>
          <input type="text" name="search" onChange={this._searching} />
        </form>
        <p>Albums:</p>
        { albums }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const albums = state.search.albums;
  return {
    albums,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchDatabase: (query) => { return dispatch(searchDatabase(query)); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
