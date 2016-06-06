import React from 'react';
import {Router, Route, hashHistory, Redirect} from 'react-router';

import Layout from './Layout';
import Skills from './Skills';
import Resume from './Resume';
import Home from './Home';
import Projects from './Projects';
import Git from './Git';


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
