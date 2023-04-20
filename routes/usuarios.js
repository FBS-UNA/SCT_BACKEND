const { Router } = require('express');
const { getUsuarios } = require('../controllers/usuarios.controller');
const { getRolesUsuarios, asignarRolesUsuario } = require('../controllers/usuarios.controller');
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();

// GET USUARIOS
router.get('/', getUsuarios);

// GET ROLES DE USUARIOS
router.get('/rolesusuario', getRolesUsuarios);

router.get('/rolesporusuario',getUsuarioConRoles);


router.post('/asignarRoles',asignarRolesUsuario);


module.exports = router;