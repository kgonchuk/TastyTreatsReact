import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
        <HashRouter>
          <App />
        </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function

