const { Router } = require('express');
const { check, header } = require('express-validator');
const { agregarArea, eliminarArea, actualizarArea, getAreas } = require('../controllers/areas.controller');
const { validarCampos } = require('../middlewares/validar-campos');



const router = Router();

// GET AREAS
router.get('/', getAreas);

// ADD AREA
router.post('/agregar',[
    check('NOMBRE_AREA', 'El nombre del área es obligatorio').notEmpty(),
    check('FECHA', 'La fecha de creacion del área es obligatoria').notEmpty().isDate({format:'DD/MM/YYYY'}),
    validarCampos
], agregarArea);

// UPDATE AREA
router.put('/actualizar',[
    check('ID_AREA', 'El ID del área es obligatorio').notEmpty().isNumeric(),
    check('NOMBRE_AREA', 'El nombre del área es obligatorio').notEmpty(),
    validarCampos
],actualizarArea);

// DELETE AREA
router.delete('/eliminar',[
    header('id-area', 'El ID_AREA es obligatorio').notEmpty().isNumeric(),
    validarCampos
],eliminarArea);


module.exports = router;