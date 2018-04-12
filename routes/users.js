var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Afficher tous les utilisateurs');
});

router.get('/:id([0-9]+)', function(req, res, next) {
  var userID = req.params.id;
  res.send(userID);
});

router.post('/', function(req, res, next) {
  res.send('Création d\'un utilisateur');
});

router.put('/:id([0-9]+)', function(req, res, next) {
  res.send('Mettre à jour l\'utilisateur');
});

router.delete('/:id([0-9]+)', function(req, res, next) {
  res.send('Supprimer un utilisateur');
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
