const { Router } = require('express');
const { check } = require('express-validator');
const { agregarArea } = require('../controllers/areas.controller');
const { validarCampos } = require('../middlewares/validar-campos');



const router = Router();

// GET AREAS

// ADD AREA
router.post('/agregar',[
    check('NOMBRE_AREA', 'El nombre del área es obligatorio').notEmpty(),
    check('FECHA', 'La fecha de creacion del área es obligatoria').notEmpty().isDate(),
    validarCampos
], agregarArea);

// UPDATE AREA

// DELETE AREA

module.exports = router;