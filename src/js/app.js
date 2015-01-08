/** @jsx React.DOM */

// requirements
var _                       = require('underscore');
var React                   = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var Touchstone              = require('touchstonejs');
var classnames              = require('classnames');

// config
var config = require('./config/config');
var routes = require('./config/routes');
var views = {

  // app
  'home': require('./pages/home'),
  
  // transitions
  
};

// bootstrap
var App = React.createClass({

  mixins: [
    Touchstone.createApp(views)
  ],

  getInitialState: function() {

    var initialState = {
      currentView: 'home',
      online: true,
      centre: undefined,
      gate: undefined,
      isNativeApp: false
    }

    return initialState
  },

  getViewProps: function() {
    return {
      online: this.state.online
    };
  },
  
  gotoDefaultView: function() {
    this.showView('home', 'fade');
  },

  render: function() {

    var appWrapperClassName = classnames({
      'app-wrapper': true,
      'is-native-app': this.state.isNativeApp
    });

    return (
      <div>
        JS Starter v10
      </div>
    );
  }
});

function startApp() {
  React.render(<App />, document.getElementById('app'));
}

startApp();
