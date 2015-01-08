/** @jsx React.DOM */

var _                       = require('underscore');
var React                   = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

// var config = require('./config')

var views = {

  // app
  'home': require('./pages/home'),
  
  // transitions
  
};

var App = React.createClass({
  mixins: [],

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
      <div className={appWrapperClassName}>
        <div className="device-silhouette">
          <div className="view-wrapper">
            <ReactCSSTransitionGroup transitionName={this.state.viewTransition.name} transitionEnter={this.state.viewTransition.in} transitionLeave={this.state.viewTransition.out}>
              {this.getCurrentView()}
            </ReactCSSTransitionGroup>
          </div>
        </div>
        <div className="demo-wrapper">
          <img src="img/logo-mark.svg" alt="TouchstoneJS" className="demo-brand" width="80" height="80" />
          <h1>
            TouchstoneJS 
            <small> demo</small>
          </h1>
          <p>React.js powered UI framework for developing beautiful hybrid mobile apps.</p>
          <ul className="demo-links">
            <li><a href="https://twitter.com/touchstonejs" target="_blank" className="ion-social-twitter">Twitter</a></li>
            <li><a href="https://github.com/jedwatson/touchstonejs" target="_blank" className="ion-social-github">Github</a></li>
            <li><a href="http://touchstonejs.io" target="_blank" className="ion-map">Roadmap</a></li>
          </ul>
        </div>
      </div>
    );
  }
});

function startApp() {
  React.render(<App />, document.getElementById('app'));
}

startApp();
