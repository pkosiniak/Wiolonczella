import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Router from './Router';
import { colors } from './assets/styles';

ReactDOM.render(<Router />, document.getElementById('root'));

const body = document.getElementsByTagName('body')[0];
if (body) {
   body.style.overflowX = 'hidden';
   body.style.backgroundColor = (colors.light);
   if (body.parentElement)
      body.parentElement.style.scrollBehavior = 'smooth';
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
