import DS from 'ember-data';

let Track = DS.Model.extend({
  artist: DS.attr('string'),
  title: DS.attr('string'),

  trackList: DS.belongsTo('track-list'),

  details: function () {
    return this.get('title') + ' by ' + this.get('artist');
  }.property('artist', 'title')
});

export default Track;
