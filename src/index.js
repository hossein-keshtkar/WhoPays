import ReactDOM from "react-dom";
import React from "react";
import App from './App';
import {MyProvider} from './contexts/index';

ReactDOM.render(
    <React.StrictMode>
        <MyProvider>
            <App />
        </MyProvider>
    </React.StrictMode>
    , document.getElementById('root'));
