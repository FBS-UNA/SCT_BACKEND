const { Router } = require('express');
const { getRoles, getRolesUsuarios, updateRolesUsuario, deleteRolesUsuario } = require('../controllers/roles.controller')


const router = Router();

// GET ROLES
router.get('/', getRoles);

// GET ROLES DE USUARIOS
router.post('/rolesusuario', getRolesUsuarios);

// POST ROLES A UN USUARIO
router.post('/asignarroles', updateRolesUsuario);

// DELETE ROLES DEL USUARIO
router.post('/deleterolusuario', deleteRolesUsuario);

module.exports = router;