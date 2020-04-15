import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from "./reducers/reducer";

import 'bulma/css/bulma.css';
import './styles.scss';

import { createStore } from "redux";
import { Provider } from "react-redux";


const applicationStore = createStore(reducer);



const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={applicationStore}>
        <App />
    </Provider>,
    rootElement);