import DS from 'ember-data';

let TrackList = DS.Model.extend({
  title: DS.attr('string'),
  tracks: DS.hasMany('track')
});

export default TrackList;
