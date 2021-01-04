import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import{Provider} from "react-redux"
import {featureReducer} from "./reducers/index"
import 'bulma/css/bulma.css';
import './styles.scss';

//create Redux store
const store = createStore(featureReducer);

//Provide the Redux store to all components
const rootElement = document.getElementById('root');
ReactDOM.render(

<Provider store={store}>
    <App />
    </Provider>
, rootElement);
