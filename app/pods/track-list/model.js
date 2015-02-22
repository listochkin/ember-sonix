import DS from 'ember-data';

let TrackList = DS.Model.extend({
  title: DS.attr('string')
});

export default TrackList;

TrackList.reopenClass({
  FIXTURES: [
    { id: '11', title: 'Funky' },
    { id: '12', title: 'Lounge' },
    { id: '13', title: 'Hasidic Reggae Rock' }
  ]
});
