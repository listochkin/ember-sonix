import Ember from 'ember';

export default Ember.Object.extend({
  attemptedTransition: null,
  username: null,
  isLoggedIn: Ember.computed.notEmpty('username')
});
