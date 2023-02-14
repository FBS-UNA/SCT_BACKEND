const { Router } = require('express');
const { check } = require('express-validator');
const { agregaTramite, eliminarTramite, actualizarTramite, getTramites } = require('../controllers/tramites.controller');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();


// GET TRAMITES
router.get('/', getTramites);

// ADD TRAMITE
router.post('/agregar',[
    check('NOMBRE_TRAMITE', 'El nombre del trámite es obligatorio').notEmpty(),
    check('FECHA', 'La fecha de creacion del trámite es obligatoria').notEmpty().isDate(),
    validarCampos
],agregaTramite);

// UPDATE TRAMITE
router.put('/actualizar',[
    check('ID_TRAMITE', 'El ID_TRAMITE es obligatorio').notEmpty().isNumeric(),
    check('NOMBRE_TRAMITE', 'El NOMBRE_TRAMITE es obligatorio').notEmpty(),
    validarCampos
],actualizarTramite);

// TODO - UPDATE ESTADO DEL TRAMITE



// DELETE TRAMITE
router.delete('/eliminar',[
    check('ID_TRAMITE', 'El ID_TRAMITE es obligatorio').notEmpty().isNumeric(),
    validarCampos
],eliminarTramite);


module.exports = router;