import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addTrack: function (form) {
      let trackList = this.modelFor('track-list');
      form.trackList = trackList;
      this.store.createRecord('track', form).save().then(() => {
        this.transitionTo('track-list');
      });
    },

    closeModal: function () {
      // TODO: transition to parent route if link was send over
      window.history.back();
    }
  }
});
