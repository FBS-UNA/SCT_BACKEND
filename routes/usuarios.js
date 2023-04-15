const { Router } = require('express');
const { getUsuario } = require('../controllers/usuarios.controller');



const router = Router();

// GET USUARIOS
router.get('/', getUsuario);

module.exports = router;