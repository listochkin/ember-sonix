import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    closeModal: function () {
      // TODO: transition to parent route if link was send over
      window.history.back();
    }
  }
});
