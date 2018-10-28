import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

// import hocForRouteGuarding from './components/hoc/hocForRouteGuarding';
import hocRedirectToHomeIfAuth from './components/hoc/hocRedirectToHomeIfAuth';
import hocRedirectToLoginIfNotAuth from './components/hoc/hocRedirectToLoginIfNotAuth';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={hocRedirectToLoginIfNotAuth(Dashboard)} />
            <Route path="/projects/:id" component={hocRedirectToLoginIfNotAuth(ProjectDetails)} />
            <Route path="/signin" component={hocRedirectToHomeIfAuth(SignIn)} />
            <Route path="/signup" component={hocRedirectToHomeIfAuth(SignUp)} />
            <Route path="/create-project" component={hocRedirectToLoginIfNotAuth(CreateProject)} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
