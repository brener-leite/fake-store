import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import About from '../pages/About.jsx';
import Search from '../pages/Search.jsx';
import Home from '../pages/home/Home.jsx';

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/search" component={Search}/>
  </BrowserRouter>
);

export default Routes;