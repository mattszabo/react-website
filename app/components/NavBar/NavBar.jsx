import React from 'react';
import NavBarData from './NavBarData';

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
    console.log(this.state.brand);
    this.setState({selectedItem: itemId});
    console.log("selectedItem: " + itemId);
  }

  // the content section will eventually go when I get up to
  // learning about react routing
  render() {
    return(
      <div className="navbar group">
        <div className="brand">
          {this.state.brand.text}
        </div>
        <div>
          <NavBarItemList
            selectedItem={this.state.selectedItem}
            NavBarItemList={this.state.navBarList}
            onClick={this._updateItemSelection.bind(this)}
          />
        </div>
      </div>
    );
  }
}

class NavBarItemList extends React.Component {
  _handleClick(itemId) {
    this.props.onClick(itemId);
  }

  render() {
    return (
      <ul>
        {this.props.NavBarItemList.map((item) =>
          <NavBarItem
            key = {item.id}
            url = {item.url}
            text = {item.text}
            onClick = {this._handleClick.bind(this, item.id)}
            isSelected={(this.props.selectedItem === item.id)}
          />
        )}
      </ul>
    );
  }
}

class NavBarItem extends React.Component {
  _handleItemClick(e) {
    e.preventDefault();
    this.props.onClick();
  }

  render() {
    return (
      <li className = {(this.props.isSelected === true) ? "active" : ""}>
        <a onClick={this._handleItemClick.bind(this)}
        href={this.props.url}> {this.props.text} </a>
      </li>
    );
  }
}
