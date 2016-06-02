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
import {Router, Route, hashHistory, Redirect} from 'react-router';

import Layout from './components/Layout';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Home from './components/Home'
import Projects from './components/Projects'
import Git from './components/Git'

import './styles/main.css';

const app = (
  <Router history={hashHistory}>
    <Redirect from="/" to="/home" />
    <Route path="/" component={Layout}>
      <Route path="home" component={Home} />
      <Route path="projects" component={Projects} />
      <Route path="git" component={Git} />
      <Route path="resume" component={Resume} />
      <Route path="skills" component={Skills} />
    </Route>
  </Router>
);

export default class App extends React.Component {
  render() {
    return(
      app
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
