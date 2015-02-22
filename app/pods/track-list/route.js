import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    var tl = null;
    return this.store.find('track-list',
      params.track_list_id).then((trackList) => {
        tl = trackList;
        return this.store.find('track', { trackList: trackList.id });
      }).then(() => tl);
  }
});
