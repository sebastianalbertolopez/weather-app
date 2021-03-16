import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppStyles from "./AppStyles";

ReactDOM.render(
    <React.StrictMode>
        <AppStyles />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
