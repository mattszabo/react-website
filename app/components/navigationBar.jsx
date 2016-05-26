import React from 'react';

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
                <NavBarTabList
                    selectedTab={this.state.selectedTab}
                    navBarTabs={this.props.navBarTabs}
                    onClick={this._updateTabSelection.bind(this)}
                />
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
            <nav className="navbar navbar-inverse" role="navigation">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href="#">Matt Szabo</a>
                </div>
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
              </div>
            </nav>
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
