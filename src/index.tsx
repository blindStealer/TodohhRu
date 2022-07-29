import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createGlobalStyle} from "styled-components";
import {Provider} from "react-redux";
import store from "./store";

const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
    }
    ::placeholder {
      font-family: Calibri;
      color: black;
    }
    `

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
        <Provider store={store}>
            <GlobalStyles/>
            <App />
        </Provider>
);

