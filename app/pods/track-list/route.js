import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.store.find('track-list',
      params.track_list_id);
  }
});
