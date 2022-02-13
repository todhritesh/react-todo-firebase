import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoFirebase from './TodoFirebase';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <TodoFirebase/>
  </React.StrictMode>,
  document.getElementById('root')
);
