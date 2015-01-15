/** @jsx React.DOM */

// requirements
var _             = require('underscore');
var classnames    = require('classnames');
var React         = require('react/addons');
var Router        = require('react-router');
var Route         = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute  = Router.DefaultRoute;
var Link          = Router.Link;
var RouteHandler  = Router.RouteHandler;

// tmp
var Touchstone = require('touchstonejs');

// config
var config = require('./config/config');

var views = {

  // default
  // 'default' : require('./component/home'),

  // pages
  // 'about': require('./component/about'),

};

// bootstrap
var App = React.createClass({

  mixins: [
    //Router.State,
    Touchstone.createApp(views),
  ],

  // validate the prop types
  // http://facebook.github.io/react/docs/reusable-components.html#prop-validation
  propTypes: {
    data: React.PropTypes.shape({
      name: React.PropTypes.sting
    })
  },


  getDefaultProps: function() {
    return {
      endpoint : '/api/users/login',
      // or 
      // data: ApiRequest.get(this.endpoint, params)
      // or
      test: this.endpoint,
      // static, mocked
      data: {
        name : 'Scuba Steve'
      }
    };
  },

  render: function () {

    //var name = this.getRoutes().reverse()[0].name;
    //console.log('Navigated to : ' + name);

    return (
      <div>
        <Toolbar/>
        <header>
          <ul>
            <li><Link to="about">Page 1</Link></li>
            <li><Link to="page2">Page 2</Link></li>
          </ul>
          {this.props.data.name}
        </header>

        <RouteHandler/>
      </div>
    );
  }
});


var Toolbar = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Tooling</h1>
      </div>
    );
  }
});

var AboutPage = require('./component/about');

var Page2 = React.createClass({
  render: function () {
    return (
      <div className="Image">
        <h1>Page 2</h1>
        <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="about" handler={AboutPage} />
    <Route name="page2" handler={Page2} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});


