import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './screen/Login';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
