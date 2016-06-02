import React from 'react';
import { Link } from 'react-router';

// Renders an individual navbar item and also acts as the
// controller by handling input (clicking the navbar item)
export default class NavBarItem extends React.Component {
  _handleItemClick() {
    this.props.onClick();
  }

  render() {
    this._class = this.props.text.toLowerCase();
    this._class += (this.props.isSelected === true) ? ' active' : '';
    console.log('class: ' + this._class);
    return (
      <li className = {this._class}>
        <Link to={this.props.url} onClick={this._handleItemClick.bind(this)}>
          {this.props.text}
        </Link>
      </li>
    );
  }
}

NavBarItem.propTypes = {
  url: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  isSelected: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func.isRequired
}
