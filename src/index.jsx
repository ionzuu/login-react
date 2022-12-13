import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import './index.css';
import { LoginApp } from './LoginApp';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginApp />
  </React.StrictMode>
);
