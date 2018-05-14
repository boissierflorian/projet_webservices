var express = require('express');
var router = express.Router();
var GroupService = require('../services/groups');
var UserGroupService = require('../services/usergroup');

/**
 * List all groups
 */
router.get('/', function(req, res, next) {
  GroupService.getGroups().then(result => {
    res.json(result);
  });
});

/**
 * Get a specific group
 */
router.get('/:id([0-9]+)', function(req, res, next) {
  GroupService.getGroup(req.params).then(result => {
    UserGroupService.getUsers(req.params).then(users => {
      result.dataValues.users = users;
      res.json(result);
    });
  });
});

/**
 * Create group
 */
router.post('/', function(req, res, next) {
    GroupService.createGroup(req.body).then(result => {
        res.json(result);
    });
});

/**
 * Update specific group
 */
router.put('/:id([0-9]+)', function(req, res, next) {
  req.body.id = req.params.id;

  GroupService.updateGroup(req.body).then(result => {
    res.json(result);
  });
});

/**
 * Delete specific group
 */
router.delete('/:id([0-9]+)', function(req, res, next) {
  GroupService.deleteGroup(req.params).then(result => {
    res.json(result);
  });
});

/**
 * Add User to a specific group
 */
router.post('/:groupId([0-9]+)/user/:userId([0-9]+)', function(req, res, next) {
   UserGroupService.addUserToGroup(req.params).then(result => {
       res.json(result);
   })
});

/**
 * Delete User from a specific group
 */
router.delete('/:groupId([0-9]+)/user/:userId([0-9]+)', function(req, res, next) {
  UserGroupService.deleteUserFromGroup(req.params).then(result => {
    res.json(result);
  });
});

module.exports = router;
