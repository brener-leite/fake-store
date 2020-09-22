import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import About from '../pages/About';
import Search from '../pages/Search';
import Home from '../pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/search" component={Search}/>
  </BrowserRouter>
);

export default Routes;