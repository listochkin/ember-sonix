import DS from 'ember-data';

let Track = DS.Model.extend({
  artist: DS.attr('string'),
  title: DS.attr('string'),
  trackList: DS.belongsTo('track-list')
});

export default Track;
