import './App.css';
import Navbar from './components/layout/Navbar';
import UserState from './components/user/UserState';
import React from 'react';
import UserSearch from './components/user/UserSearch';
import Alert from './components/layout/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import User from './components/user/User';
import NotFound from './components/pages/NotFound';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/">
                  <Alert />
                  <UserSearch />
                  <UserState />
                </Route>
                <Route
                  exact
                  path="/user/:username"
                  render={(props) => <User {...props} />}
                />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
