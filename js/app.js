import React from 'react';  
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import LoginHandler from './components/Login.js';
var CatalogApp = require('./components/CatalogApp');
var Navigation = require('./components/Navigation');

var App = React.createClass({
  render: function () {
    return (
      <div className="nav">
        
        <Navigation />

        <CatalogApp />
        
        {/* this is the importTant part */}
        <RouteHandler/>
      </div>
    );
  }
});

let routes = (  
  <Route name="app" path="/" handler={App}>
    <Route name="login" path="/login" handler={LoginHandler}/>
  </Route>
);

Router.run(routes, function (Handler) {  
  React.render(<Handler/>, document.body);
});
