import React from 'react';
import XML_FORM from './components/XML_Form'
import XML_READER from './components/XML_Reader'
import NavigationBar from './components/NavigationBar'
import LoadingComponent from "./components/LoadingComponent"
import PopOutComponent from "./components/InfoPopout"

import { Provider } from 'react-redux'
import store from './store'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <LoadingComponent />
      <PopOutComponent />
      <Router>
        <NavigationBar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <XML_FORM />
            </Route>
            <Route exact path="/submit">
              <XML_READER />
            </Route>
            <Route path="*" render={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
