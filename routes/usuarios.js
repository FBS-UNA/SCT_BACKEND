const { Router } = require('express');
const { getUsuarios } = require('../controllers/usuarios.controller');
const router = Router();

// GET USUARIOS
router.get('/', getUsuarios);


module.exports = router;