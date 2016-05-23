class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            activeNavBarTab: 0
        }
    }
    _toggleSelection() {
        console.log("hi");
        console.log(this.props.navBarTabs[0].state);
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
                            onClick = {this._toggleSelection.bind(this)}
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
            active: false
        }
        console.log("constructor + " + this.state.active);
    }
    _toggleActive(e) {
        e.preventDefault();
        console.log("toggle active");
    }
    render() {
        let _className = "";
        if(this.state.active == true) {
            _className = "active";
        }
        return (
            <li className = {_className}>
                <a
                onClick={this._toggleActive}
                href={this.props.url}>
                    {this.props.text}
                </a>
            </li>
        );
    }
}

var navBarList = [
    {id: 0, url: "#", text: "Home"},
    {id: 1, url: "#", text: "Projects"},
    {id: 2, url: "#", text: "Git"},
    {id: 3, url: "#", text: "Resume"},
];

ReactDOM.render(
  <NavBar navBarTabs={navBarList} />,
  document.getElementById("navigation-bar")
);
