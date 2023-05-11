const { Router } = require('express');
const { check, header } = require('express-validator');
const { getDonutTramites, getDonutAreas, getTotalRegistros, getCantidadReportesPorMes, getCantidadReportesPorAnnio } = require('../controllers/chart.controller');


const router = Router();

// GET DONUT TRAMITES
router.get('/donut-tramites', getDonutTramites);

// GET DONUT AREAS
router.get('/donut-areas', getDonutAreas);

// GET TOTAL DE REGISTROS
router.get('/total-registros', getTotalRegistros);

// GET TOTAL DE REGISTROS POR MES
router.get('/total-registros/mes', getCantidadReportesPorMes);

// GET TOTAL DE REGISTROS POR ANNIO
router.get('/total-registros/annio', getCantidadReportesPorAnnio);

module.exports = router;
