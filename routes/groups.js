var express = require('express');
var router = express.Router();
var GroupService = require('../services/groups');
var UserGroupService = require('../services/usergroup');

router.get('/', function(req, res, next) {
  GroupService.getGroups().then(result => {
    res.json(result);
  });
});

router.get('/:id([0-9]+)', function(req, res, next) {
  res.send('Afficher un seul groupe');
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

router.delete('/:groupId([0-9]+)/user/:userId([0-9]+)', function(req, res, next) {
  UserGroupService.deleteUserFromGroup(req.params).then(result => {
    res.json(result);
  });
});

module.exports = router;
