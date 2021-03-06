var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');


// Load foundation

$(document).foundation();

// load css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Countdown}/>
      <Route path="/timer" component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
