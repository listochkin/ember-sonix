import Ember from 'ember';

export default Ember.Component.extend({
  title: null,
  onClose: null,

  actions: {
    closeMe () {
      this.sendAction('onClose');
    }
  }
});
