const { Router } = require('express');
const { check, header } = require('express-validator');
const { getTramitesAreas, updateTramitesAreas } = require('../controllers/tramites-areas.controller');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

// GET TRAMITES DE UN AREA
router.get('/',[
    header('id-area', 'El ID_AREA es obligatorio').notEmpty().isNumeric(),
    validarCampos
], getTramitesAreas);


// UPDATE TRAMITES DE UN AREA
router.put('/update',[
    check('IDS_TRAMITES_ASOCIADOS', 'La lista de tramites es obligatoria').notEmpty().isArray()
], updateTramitesAreas);



module.exports = router;