import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom"
import store from "../src/redux/store.js"
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Auth0Provider
      domain='dev-jzsyp78gzn6fdoo4.us.auth0.com'
      clientId='YWoSSAS6qZS9Wf65XTiwUgF9V4EnJP4h'
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
