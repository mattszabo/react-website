import React from 'react';
import NavBarData from './NavBarData';
import NavBarItem from './NavBarItem';

// Renders the navbar items and also acts as the controller by handling
// navbar item clicks that are passed up by the NavBarItem class
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
