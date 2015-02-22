import DS from 'ember-data';

let Track = DS.Model.extend({
  artist: DS.attr('string'),
  title: DS.attr('string')
});

export default Track;

Track.reopenClass({
  FIXTURES: [
    { id: '21', artist: 'Daft Punk', title: 'Lose Yourself to Dance' },
    { id: '22', artist: 'Chic', title: 'Everybody Dance' },
    { id: '23', artist: 'Chic', title: 'Good Times' },
    { id: '24', artist: 'Tensnake', title: 'Selfish' },
    { id: '25', artist: 'Kool & The Gang', title: 'Tonight' },
    { id: '26', artist: 'Plej', title: 'You' },
    { id: '27', artist: 'Arnold T', title: 'Bang Bang' },
    { id: '28', artist: 'Jerome Isma-Ae', title: 'Underwater Love' },
    { id: '29', artist: 'Matisyahu', title: 'Jerusalem' }
  ]
});
