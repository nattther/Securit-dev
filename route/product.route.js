const express = require('express');
const router = express.Router();
const produitController = require('./../controller/product.controller.js');

router.get('/', produitController.getAll);

router.get('/:id', produitController.getById);

router.post('/', produitController.create);

router.put('/:id', produitController.update);

router.delete('/:id', produitController.remove);

module.exports = router;
