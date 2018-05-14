var express = require('express');
var router = express.Router();
var userService = require('../services/user');
var publicationService = require('../services/user_publications');

/* GET users listing. */
router.get('/', function(req, res, next) {
  userService.getUsers().then(function(datas){
    res.json(datas);
  })
});

router.get('/:id([0-9]+)', function(req, res, next) {
    userService.getUser(req.params.id).then(function(datas){
        res.json(datas);
    })
});

router.post('/', function(req, res, next) {
    userService.createUser(req.body).then(function(datas){
        res.json(datas);
    });
});

router.put('/:id([0-9]+)', function(req, res, next) {
    userService.updateUser(req.params.id, req.body).then(function(datas){
        res.json(datas);
    });
});

router.delete('/:id([0-9]+)', function(req, res, next) {
  userService.deleteUser(req.params.id).then(function(datas){
      res.json(datas);
  })
});

router.post('/:id([0-9]+)/publications', function(req, res, next) {
  publicationService.createUserPublication(req.params.id, req.body).then(function(datas){
    res.json(datas);
  })
});

router.get('/:id([0-9]+)/publications', function(req, res, next) {
  publicationService.getUserPublications(req.params.id).then(function(publications) {
    res.json(publications);
  });
});

router.get('/:id([0-9]+)/publications/:publicationId([0-9]+)', function(req, res, next) {
  publicationService.getUserPublication(req.params.id, req.params.publicationId).then(function(publication) {
    res.json(publication);
  });
});

router.put('/:userId([0-9]+)/publications/:publicationId([0-9]+)', function(req, res, next) {
  publicationService.updateUserPublication(req.params.userId, req.params.publicationId, req.body).then(function(datas) {
    res.json(datas);
  })
});

router.delete('/:userId([0-9]+)/publications/:publicationId([0-9]+)', function(req, res, next) {
  publicationService.deleteUserPublication(req.params.userId, req.params.publicationId).then(function(datas) {
    res.json(datas);
  })
});

module.exports = router;
