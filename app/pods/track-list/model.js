import DS from 'ember-data';

let TrackList = DS.Model.extend({
  title: DS.attr('string'),
  tracks: DS.hasMany('track', { async: true })
});

export default TrackList;

TrackList.reopenClass({
  FIXTURES: [
    { id: '11', title: 'Funky', tracks: ['21', '22', '23', '24', '25'] },
    { id: '12', title: 'Lounge', tracks: ['26', '27', '28'] },
    { id: '13', title: 'Hasidic Reggae Rock', tracks: ['29'] }
  ]
});
