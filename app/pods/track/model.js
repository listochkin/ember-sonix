import DS from 'ember-data';

let Track = DS.Model.extend({
  artist: DS.attr('string'),
  title: DS.attr('string'),
  trackList: DS.belongsTo('track-list')
});

export default Track;

Track.reopenClass({
  FIXTURES: [
    { id: '21', artist: 'Daft Punk', title: 'Lose Yourself to Dance', trackList: '11' },
    { id: '22', artist: 'Chic', title: 'Everybody Dance', trackList: '11' },
    { id: '23', artist: 'Chic', title: 'Good Times', trackList: '11' },
    { id: '24', artist: 'Tensnake', title: 'Selfish', trackList: '11' },
    { id: '25', artist: 'Kool & The Gang', title: 'Tonight', trackList: '11' },
    { id: '26', artist: 'Plej', title: 'You', trackList: '12' },
    { id: '27', artist: 'Arnold T', title: 'Bang Bang', trackList: '12' },
    { id: '28', artist: 'Jerome Isma-Ae', title: 'Underwater Love', trackList: '12' },
    { id: '29', artist: 'Matisyahu', title: 'Jerusalem', trackList: '13' }
  ]
});
