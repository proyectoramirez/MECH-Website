import 'sanitize.css/sanitize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import GlobalStyles from "./GlobalStyles";

const MOUNT_NODE = document.getElementById("app");

const render = () => ReactDOM.render(
    <BrowserRouter basename={FRONTEND_PATH}>
        <App />
        <GlobalStyles />
    </BrowserRouter>,
    MOUNT_NODE
);

if (module.hot) {
    module.hot.accept(`./${FRONTEND_PATH}`, () => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        render();
    });
}

render();