module.exports = function(app) {
  var express = require('express');
  var talksRouter = express.Router();

  talksRouter.get('/', function(req, res) {
    res.send({
      'talks': []
    });
  });

  talksRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  talksRouter.get('/:id', function(req, res) {
    res.send({
      'talks': {
        id: req.params.id
      }
    });
  });

  talksRouter.put('/:id', function(req, res) {
    res.send({
      'talks': {
        id: req.params.id
      }
    });
  });

  talksRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/talks', talksRouter);
};
