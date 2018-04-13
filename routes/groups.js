var express = require('express');
var router = express.Router();
var GroupService = require('../services/groups');

router.get('/', function(req, res, next) {
  GroupService.getGroups().then(result => {
    res.json(result);
  });
});

router.post('/', function(req, res, next) {
    GroupService.createGroup(req.body).then(result => {
        res.json(result);
    });
});

router.put('/:id([0-9]+)', function(req, res, next) {
  req.body.id = req.params.id;

  GroupService.updateGroup(req.body).then(result => {
    res.json(result);
  });
});

router.delete('/:id([0-9]+)', function(req, res, next) {
  GroupService.deleteGroup(req.params).then(result => {
    res.json(result);
  });
});

module.exports = router;
