var FIXTURES = [
    { id: '21', artist: 'Daft Punk', title: 'Lose Yourself to Dance', trackList: '11' },
    { id: '22', artist: 'Chic', title: 'Everybody Dance', trackList: '11' },
    { id: '23', artist: 'Chic', title: 'Good Times', trackList: '11' },
    { id: '24', artist: 'Tensnake', title: 'Selfish', trackList: '11' },
    { id: '25', artist: 'Kool & The Gang', title: 'Tonight', trackList: '11' },
    { id: '26', artist: 'Plej', title: 'You', trackList: '12' },
    { id: '27', artist: 'Arnold T', title: 'Bang Bang', trackList: '12' },
    { id: '28', artist: 'Jerome Isma-Ae', title: 'Underwater Love', trackList: '12' },
    { id: '29', artist: 'Matisyahu', title: 'Jerusalem', trackList: '13' }
  ];
module.exports = function(app) {
  var express = require('express');
  var tracksRouter = express.Router();

  tracksRouter.get('/', function(req, res) {
    res.send({
      'tracks': FIXTURES
    });
  });

  tracksRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  tracksRouter.get('/:id', function(req, res) {
    res.send({
      'tracks': {
        id: FIXTURES.filter(function (track) {
          return track.id == req.params.id;
        })[0]
      }
    });
  });

  tracksRouter.put('/:id', function(req, res) {
    res.send({
      'tracks': {
        id: req.params.id
      }
    });
  });

  tracksRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/tracks', tracksRouter);
};
