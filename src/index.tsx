import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Router from './Router';

process.env.NODE_ENV === 'development'
   ? ReactDOM.render(<Router />, document.getElementById('root'))
   : ReactDOM.render(<App />, document.getElementById('root'));

const body = document.getElementsByTagName('body')[0];
if (body)
   body.style.overflowX = 'hidden';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
