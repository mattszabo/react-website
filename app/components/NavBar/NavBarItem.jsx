import React from 'react';

// Renders an individual navbar item and also acts as the
// controller by handling input (clicking the navbar item)
export default class NavBarItem extends React.Component {
  _handleItemClick(e) {
    e.preventDefault();
    this.props.onClick();
  }

  render() {
    let _class = (this.props.isSelected === true) ? "active" : "";
    return (
      <li className = {_class}>
        <a onClick={this._handleItemClick.bind(this)}
        href={this.props.url}> {this.props.text} </a>
      </li>
    );
  }
}
