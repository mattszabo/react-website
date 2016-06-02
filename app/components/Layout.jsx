import React from 'react';

import NavBar from './NavBar/NavBar';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = {
  // children is a special proptype
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ])
}
