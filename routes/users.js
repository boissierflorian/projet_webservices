var express = require('express');
var router = express.Router();
var userService = require('../services/user');

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
  res.send('Créer une publication pour un utilisateur');
});

router.get('/:id([0-9]+)/publications', function(req, res, next) {
  res.send('Afficher les publications d\'un utilisateur');
});

router.put('/:userId([0-9]+)/publications/:publicationId([0-9]+)', function(req, res, next) {
  res.send('Mettre à jour la publication d\'un utilisateur');
});

router.delete('/:userId([0-9]+)/publications/:publicationId([0-9]+)', function(req, res, next) {
  res.send('Supprimer la publication d\'un utilisateur');
});

module.exports = router;
