// Import React dependencies
var React = require('react');
var ReactDOM = require('react-dom');
// ES6 ... using destructuring syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
/**
 * ES5 ... this is same as above ES6 for the first var 'Route,'
 *  var Route = require('react-router').Route;
 */
var Main = require('Main');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles')

// Function ReactDom.render kicks off the application
ReactDOM.render(
  // JSX = call the React Component  
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>, 
  document.getElementById('app')
);

