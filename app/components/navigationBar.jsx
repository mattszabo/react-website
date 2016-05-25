import React from 'react';

export default class NavBar extends React.Component {
    constructor() {
        super();
        console.log("settings state of NavBar");
        this.state = {
            selectedTab: 0
        }
        console.log("navbar selected tab is: " + this.state.selectedTab);
        console.log("this is: ");
        console.log(this);
    }

    _updateTabSelection(tab) {
        console.log("now in updateTabSelection(tab) inside NavBar");
        console.log("this is: ");
        console.log(this);
        this.setState({
            selectedTab: tab.id
        });
    }

    render() {
        return(
            <div>
                <NavBarTabList
                    selectedTab={this.state.selectedTab}
                    navBarTabs={this.props.navBarTabs}
                    _updateTabSelection={this._updateTabSelection.bind(this)}
                />
                <div className="content">
                    <Content selectedTab={this.state.selectedTab} />
                </div>
            </div>
        );
    }
}

class NavBarTabList extends React.Component {
    _handleNavBarClick(tab) {
        console.log("propegated to narbartablist. selected tab is: ");
        console.log(this.props.selectedTab);
        this.props._updateTabSelection(tab);
        console.log("done updatetabselection")
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
                            _handleNavBarClick = {this._handleNavBarClick.bind(this, tab)}
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
    constructor() {
        super();
        this.state = {
            isActive: false
        }
    }

    _handleTabClick(e) {
        console.log("tab clicked: " + this.props.text + " setting state...");
        console.log("************");
        console.log("this.props.isSelected: " + this.props.isSelected);
        console.log("************");

        e.preventDefault();
        this.setState({
            isActive: this.props.isSelected
        });
        console.log("just set state for isActive to true");
        console.log("calling navbarclick handler in navbarlist");
        this.props._handleNavBarClick();
        console.log("returned from navbarclick handler in navbarlist");
    }

    render() {

        let _className = "";
        if(this.state.isActive === true) {
            _className = "active";
        }
        return (
            <li className = {_className}>
                <a
                onClick={this._handleTabClick.bind(this)}
                href={this.props.url}>
                    {this.props.text}
                </a>
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
