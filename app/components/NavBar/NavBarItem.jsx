import React from 'react';
import { Link } from 'react-router';

// Renders an individual navbar item and also acts as the
// controller by handling input (clicking the navbar item)
export default class NavBarItem extends React.Component {
  _handleItemClick(e) {
    
    this.props.onClick();
  }

  render() {
    let _class = (this.props.isSelected === true) ? "active" : "";
    return (
      <li className = {_class}>
        <Link to={this.props.url} onClick={this._handleItemClick.bind(this)}>
          {this.props.text}
        </Link>
      </li>
    );
  }
}
