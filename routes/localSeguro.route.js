const express = require('express')
const Local = require('../models/localSeguro.model')
const router = express.Router();
const {getLocais, getLocal, createLocal, updateLocal, deleteLocal} = require('../controllers/localSeguro.controller')

router.get('/', getLocais);
router.get('/:id', getLocal);
router.post('/', createLocal);
router.put('/:id', updateLocal);
router.delete('/:id', deleteLocal);

module.exports = router;
