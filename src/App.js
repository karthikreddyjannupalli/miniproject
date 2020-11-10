import React from 'react';
import './App.css';
import {  BrowserRouter } from 'react-router-dom';
import Main from './containers/Main';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configurestore';

function App() {
  const store=ConfigureStore();
  return (
      <Provider store={store}>
      <BrowserRouter>
      <div className="App">
        <Main/>
      </div>
      </BrowserRouter>
      </Provider>
  );
}

export default App;
