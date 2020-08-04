import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./App.jsx";
import './store';

const store = window.store;

ReactDOM.render(<App store={store}/>, document.getElementById('app'));
