import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login: function (username) {
      this.session.set('username', username);
      let attemptedTransition = this.session.get('attemptedTransition');
      if (attemptedTransition) {
        this.session.set('attemptedTransition', null);
        attemptedTransition.retry();
      } else {
        this.transitionTo('index');
      }
    }
  }
});
