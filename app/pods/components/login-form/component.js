import Ember from 'ember';

export default Ember.Component.extend({
  username: null,

  actions: {
    login: function () {
      this.sendAction('onLogin', this.get('username'));
    }
  }
});
