import Ember from 'ember';

export default Ember.Object.extend({
  username: null,
  isLoggedIn: Ember.computed.notEmpty('username')
});
