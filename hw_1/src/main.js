import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./App.jsx";
import createStore  from './store';

const store = createStore();

ReactDOM.render(<App store={store}/>, document.getElementById('app'));
