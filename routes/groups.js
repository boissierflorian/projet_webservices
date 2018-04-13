var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Display Groups');
});

router.get('/:id([0-9]+)', function(req, res, next) {
  res.send('Afficher un seul groupe');
});

router.post('/', function(req, res, next) {
  res.send('Ajouter un groupe');
});

router.put('/:id([0-9]+)', function(req, res, next) {
  res.send('Mettre à jour un groupe');
});

router.delete('/:id([0-9]+)', function(req, res, next) {
  res.send('Supprimer un groupe');
});

router.delete('/:groupId([0-9]+)/user/:userId([0-9]+)', function(req, res, next) {
  res.send('Supprimer un utilisateur d\'un groupe spécifié');
});

module.exports = router;
