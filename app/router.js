import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('track-list', function () {
    this.resource('track');
  });
});

export default Router;
