import Ember from 'ember';
import DS from 'ember-data';

let TrackList = DS.Model.extend({
  title: DS.attr('string'),
  tracks: DS.hasMany('track'),

  persistentTracks: Ember.computed.filterBy('tracks', 'isNew', false)
});

export default TrackList;
