var FIXTURES = [
  { id: '11', title: 'Funky', tracks: [] },
  { id: '12', title: 'Lounge', tracks: ['26', '27', '28'] },
  { id: '13', title: 'Hasidic Reggae Rock', tracks: ['29'] }
];

module.exports = function(app) {
  var express = require('express');
  var trackListsRouter = express.Router();

  trackListsRouter.get('/', function(req, res) {
    res.send({
      'track_lists': FIXTURES
    });
  });

  trackListsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  trackListsRouter.get('/:id', function(req, res) {
    res.send({
      'track_lists': FIXTURES.filter(function (trackList) {
        return trackList.id == req.params.id;
      })[0]
    });
  });

  trackListsRouter.put('/:id', function(req, res) {
    res.send({
      'track_lists': {
        id: req.params.id
      }
    });
  });

  trackListsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/track_lists', trackListsRouter);
};
