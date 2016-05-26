/////////////////////////////////////////////////
// Matt's single page app that was written in: //
//          ______                _            //
//         | ___ \              | |            //
//         | |_/ /___  __ _  ___| |_           //
//         |    // _ \/ _` |/ __| __|          //
//         | |\ \  __/ (_| | (__| |_           //
//         \_| \_\___|\__,_|\___|\__|          //
//                                             //
//                        You should hire him. //
/////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import ListBox from './components/ListBox';
import NavBar from './components/NavBar';

let navBarList = [
    {id: 0, url: "#", text: "Home"},
    {id: 1, url: "#", text: "Projects"},
    {id: 2, url: "#", text: "Git"},
    {id: 3, url: "#", text: "Resume"},
    {id: 4, url: "#", text: "Skills"}
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

$(function() {
  ReactDOM.render(
    <App />,
    document.getElementById("content")
  );
})
