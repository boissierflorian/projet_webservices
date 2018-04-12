var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Display Groups');
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

module.exports = router;
