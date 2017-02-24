import React from 'react';

class Browse extends React.Component {

  componentWillReceiveProps(nextProps) {
    this.setState({
        children: nextProps.children
    });
  }

  render() {
    return (
      <div id='browse' className="comp-d custom-scrollbar">
        <div id='albums-index-container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Browse;
