const { Router } = require('express');
const { check } = require('express-validator');
const { agregaTramite } = require('../controllers/tramites.controller');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();


// GET TRAMITES


// ADD TRAMITE
router.post('/agregar',[
    check('NOMBRE_TRAMITE', 'El nombre del trámite es obligatorio').notEmpty(),
    check('FECHA', 'La fecha de creacion del trámite es obligatoria').notEmpty().isDate(),
    validarCampos
],agregaTramite);

// UPDATE TRAMITE


// DELETE TRAMITE


module.exports = router;