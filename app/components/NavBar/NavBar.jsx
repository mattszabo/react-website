import React from 'react';
import NavBarData from './NavBarData';

// Main class that handles
export default class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedItem: 1,
      navBarList: NavBarData.getNavBarList(),
      brand: NavBarData.getBrand()
    }
  }

  _updateItemSelection(itemId) {
    this.setState({selectedItem: itemId});
    console.log("selectedItem: " + itemId);
  }

  render() {
    return(
      <div className="navbar group">
        <div className="brand">
          {this.state.brand.text}
        </div>
        <div>
          <ul>
            {this.state.navBarList.map((item) =>
              <NavBarItem
                key = {item.id}
                url = {item.url}
                text = {item.text}
                onClick = {this._updateItemSelection.bind(this, item.id)}
                isSelected={(this.state.selectedItem === item.id)}
              />
            )}
          </ul>
        </div>
      </div>
    );
  }
}

// Handles the event of an item being clicked
class NavBarItem extends React.Component {
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
