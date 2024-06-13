import React, { Suspense } from "react";
// import ReactDOM from "react-dom";
import {createRoot} from 'react-dom/client';
// import "./assets/scss/style.scss";
import App from "./App";
import './index.css';

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, HashRouter } from "react-router-dom";
import Loader from "./layouts/loader/Loader";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { Provider } from "react-redux";
import {store} from './store';

import jwt from 'jsonwebtoken';
import { history, http } from './helpers';
import ActionTypes from './store/action-types';


const jwt_secret = process.env.REACT_APP_JWT_SECRET;
let token = localStorage.getItem("token");
if (token) {
  jwt.verify(token, jwt_secret, (err, decoded) => {
    if (err) {
      token = null;
      store.dispatch({ type: ActionTypes.LOGOUT_USER});
      history.push('/login')
    } else {
      if (decoded.iss !== `${process.env.REACT_APP_API_URL}/auth/login`) {
        token = null;
        store.dispatch({ type: ActionTypes.LOGOUT_USER });
        history.push('/login');
      }
    }
  });
}

const render = () => (
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </Provider>,
  document.getElementById("root")
);

if (token) {
  http.get("/about").then(res => {
    store.dispatch({ type: ActionTypes.LOGIN_USER, currentUser: res.data });
    render();
  });
} else {
  render();
}

library.add(fab, fas, far);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
