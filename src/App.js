import React from 'react';
import XML_FORM from './components/XML_Form'
import XML_READER from './components/XML_Reader'

import { Provider } from 'react-redux'
import store from './store'


import './App.css';

function App() {
  return (
    <Provider store={store}>
      <nav className="header"/>
      <div className="container">
        <XML_READER />
        <XML_FORM />
      </div>
    </Provider>
  );
}

export default App;
