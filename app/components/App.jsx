/////////////////////////////////////////////////
// Matt's single page app that was written in: //
//          ______                _            //
//         | ___ \              | |            //
//         | |_/ /___  __ _  ___| |_           //
//         |    // _ \/ _` |/ __| __|          //
//         | |\ \  __/ (_| | (__| |_           //
//         \_| \_\___|\__,_|\___|\__|.         //
//                                             //
//                        You should hire him. //
/////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import NavBar from './NavBar';
import ListBox from './ListBox';

export default class App extends React.Component {
  render(){
    return(
      <div>
        <NavBar />
      </div>
    );
  }
}
