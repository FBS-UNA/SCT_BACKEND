const { Router } = require('express');
const { getUsuarios } = require('../controllers/usuarios.controller');


const router = Router();

// GET USUARIOS
router.get('/', getUsuarios);

// router.get('/rolesporusuario', getUsuarioConRoles);

// router.post('/asignarroles', asignarRolesUsuario);

module.exports = router;