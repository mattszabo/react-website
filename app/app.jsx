import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import ListBox from './components/list-box';
import NavBar from './components/navigationBar';

let navBarList = [
    {id: 0, url: "#", text: "Home"},
    {id: 1, url: "#", text: "Projects"},
    {id: 2, url: "#", text: "Git"},
    {id: 3, url: "#", text: "Resume"},
];

class App extends React.Component {
  render(){
    return(
      <div>
        <NavBar navBarTabs={navBarList} />
        <ListBox />
      </div>
    );
  }
}

jQuery(function() {
  ReactDOM.render(
    <App />,
    document.getElementById("content")
  );
})
