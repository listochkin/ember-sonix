import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('track-list', {
    path: 'track-list/:track_list_id'
  },  function () {
    this.resource('track');
  });
});

export default Router;
