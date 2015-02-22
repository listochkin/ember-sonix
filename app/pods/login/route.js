import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login: function (username) {
      this.session.set('username', username);
      this.transitionTo('index');
    }
  }
});
