import React from 'react';
import Playground from './Playground/Playground';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Router: React.FC = () => (
   <BrowserRouter>
      <Switch>
         <Route exact path="/" component={App} />
         <Route path="/playground" component={Playground} />
      </Switch>
   </BrowserRouter>
);

export default Router;
