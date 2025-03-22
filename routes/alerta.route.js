const express = require('express')
const Alerta = require('../models/alerta.model')
const router = express.Router();
const {getAlertas, getAlerta, createAlerta, updateAlerta, deleteAlerta} = require('../controllers/alerta.controller')

router.get('/', getAlertas);
router.get('/:id', getAlerta);
router.post('/', createAlerta);
router.put('/:id', updateAlerta);
router.delete('/:id', deleteAlerta);

module.exports = router;