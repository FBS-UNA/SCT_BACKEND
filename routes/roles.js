const { Router } = require('express');
const { getRoles, getRolesUsuarios } = require('../controllers/roles.controller')


const router = Router();

// GET ROLES
router.get('/', getRoles);

// GET ROLES DE USUARIOS
router.post('/rolesusuario', getRolesUsuarios);

module.exports = router;