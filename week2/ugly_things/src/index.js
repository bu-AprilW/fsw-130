import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {UglyProvider} from "./Components/UglyContext"


ReactDOM.render(
    <UglyProvider>
        <App />
    </UglyProvider>,
    document.getElementById("root")
);