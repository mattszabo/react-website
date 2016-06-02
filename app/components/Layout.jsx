import React from 'react';

import NavBar from './NavBar/NavBar';

export default class Layout extends React.Component {
  render() {
    return (
      <div className='layout'>
        <div className='header'>
          <NavBar />
        </div>
        <div className='content'>
          {this.props.children}
        </div>
        <div className='footer'>
          footer
        </div>
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
