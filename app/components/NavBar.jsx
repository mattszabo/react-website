import React from 'react';

let navBarList = [
    {id: 0, url: "#", text: "Home"},
    {id: 1, url: "#", text: "Projects"},
    {id: 2, url: "#", text: "Git"},
    {id: 3, url: "#", text: "Resume"},
    {id: 4, url: "#", text: "Skills"}
];

export default class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {selectedTab: 0}
  }

  _updateTabSelection(tab) {
    this.setState({selectedTab: tab.id});
  }

  // the content section will eventually go when I get up to
  // learning about react routing
  render() {
    return(
      <div>
        <nav className="navbar navbar-inverse" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Matt Szabo</a>
            </div>
            <NavBarTabList
              selectedTab={this.state.selectedTab}
              navBarTabs={navBarList}
              onClick={this._updateTabSelection.bind(this)}
            />
          </div>
        </nav>
        <div className="content">
          <Content selectedTab={this.state.selectedTab} />
        </div>
      </div>
    );
  }
}

class NavBarTabList extends React.Component {
  _handleClick(tab) {
    this.props.onClick(tab);
  }

  render() {
    return (
      <ul className="nav navbar-nav navbar-right pull-right">
        {this.props.navBarTabs.map((tab) =>
          <NavBarTab
            key = {tab.id}
            url = {tab.url}
            text = {tab.text}
            onClick = {this._handleClick.bind(this, tab)}
            isSelected={(this.props.selectedTab === tab.id)}
          />
        )}
      </ul>
    );
  }
}

class NavBarTab extends React.Component {
  _handleTabClick(e) {
    e.preventDefault();
    this.props.onClick();
  }

  render() {
    return (
      <li className = {(this.props.isSelected === true) ? "active" : ""}>
        <a onClick={this._handleTabClick.bind(this)}
        href={this.props.url}> {this.props.text} </a>
      </li>
    );
  }
}

var Content = React.createClass({
    render: function(){
        return(
            <div className="content">
                {this.props.selectedTab === 0 ?
                <div className="home">
                    Home
                </div>
                :null}

                {this.props.selectedTab === 1 ?
                <div className="projects">
                    Projects
                </div>
                :null}

                {this.props.selectedTab === 2 ?
                <div className="git">
                    Git
                </div>
                :null}

                {this.props.selectedTab === 3 ?
                <div className="resume">
                    Resume
                </div>
                :null}
            </div>
        );
    }
});
