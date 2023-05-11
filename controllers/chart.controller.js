const BD = require('../database/config');
const { response, request } = require('express');


const getDonutTramites = async (req = request, res = response)=>{

    const sql = 'SELECT T.NOMBRE_TRAMITE, COUNT(*) AS CANTIDAD FROM REGISTRO_TRAMITE R JOIN TRAMITES T ON R.ID_TRAMITE = T.ID_TRAMITE GROUP BY T.ID_TRAMITE, T.NOMBRE_TRAMITE';
    const donutTramitesData = [];

    try {

        let dbresponse = await BD.dbConnection(sql, [], false);

        dbresponse.rows.map((data)=>{
            const donutTramite = {
                'NOMBRE_TRAMITE' : data[0],
                'CANTIDAD' : data[1],
            }
            donutTramitesData.push(donutTramite);
        })

        return res.json({
            OK: true,
            TRAMITES_DONUT: donutTramitesData
        });
   
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            OK: false,
            MSG: 'Por favor hable con el administrador'
        });
    }
};

const getDonutAreas = async (req = request, res = response)=>{

    const sql = 'SELECT A.NOMBRE_AREA, COUNT(*) AS CANTIDAD FROM REGISTRO_TRAMITE R JOIN AREAS A ON R.ID_AREA = A.ID_AREA GROUP BY A.ID_AREA, A.NOMBRE_AREA';
    const donutAreasData = [];

    try {

        let dbresponse = await BD.dbConnection(sql, [], false);

        dbresponse.rows.map((data)=>{
            const donutArea = {
                'NOMBRE_AREA' : data[0],
                'CANTIDAD' : data[1]
            }
            donutAreasData.push(donutArea);
        })

        return res.json({
            OK: true,
            AREAS_DONUT: donutAreasData
        });
   
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            OK: false,
            MSG: 'Por favor hable con el administrador'
        });
    }
};

const getTotalRegistros = async (req = request, res = response)=>{

    const sql = 'SELECT COUNT(*) AS CANTIDAD_REGISTROS FROM REGISTRO_TRAMITE';
    let cantidadRegistros = 0;

    try {

        let dbresponse = await BD.dbConnection(sql, [], false);
        
        dbresponse.rows.map((data)=>{
            cantidadRegistros = data[0]
        })


        return res.json({
            OK: true,
            CANTIDAD_REGISTROS : cantidadRegistros
        });
   
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            OK: false,
            MSG: 'Por favor hable con el administrador'
        });
    }
};

const getCantidadReportesPorMes = async (req = request, res = response)=>{

    const sql = "SELECT TRIM(TO_CHAR(FECHA_Y_HORA, 'MONTH')) AS MES, COUNT(*) AS CANTIDAD FROM REGISTRO_TRAMITE RT GROUP BY TO_CHAR(FECHA_Y_HORA, 'MONTH')";
    const lineCantidadRegistrosPorMesData = [];


    try {

        let dbresponse = await BD.dbConnection(sql, [], false);

        dbresponse.rows.map((data)=>{
            const registroPorMes = {
                "MES" : data[0],
                "CANTIDAD" : data[1]
            }

            lineCantidadRegistrosPorMesData.push(registroPorMes);
        })

        return res.json({
            OK: true,
            CANTIDAD_REGISTRO_POR_MES_LINE : lineCantidadRegistrosPorMesData
        });
   
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            OK: false,
            MSG: 'Por favor hable con el administrador'
        });
    }
};

const getCantidadReportesPorAnnio = async (req = request, res = response)=>{

    const sql = "SELECT TO_CHAR(FECHA_Y_HORA, 'YYYY') AS ANNIO, COUNT(*) AS CANTIDAD FROM REGISTRO_TRAMITE RT GROUP BY TO_CHAR(FECHA_Y_HORA, 'YYYY')";
    const lineCantidadRegistrosPorAnnioData = [];

    try {

        let dbresponse = await BD.dbConnection(sql, [], false);

        dbresponse.rows.map((data)=>{
            const registroPorAnnio = {
                "ANNIO" : data[0],
                "CANTIDAD" : data[1]
            }

            lineCantidadRegistrosPorAnnioData.push(registroPorAnnio);
        })

        return res.json({
            OK: true,
            CANTIDAD_REGISTRO_POR_ANNIO_LINE : lineCantidadRegistrosPorAnnioData
        });
   
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            OK: false,
            MSG: 'Por favor hable con el administrador'
        });
    }
};

module.exports = {
    getDonutTramites,
    getDonutAreas,
    getTotalRegistros,
    getCantidadReportesPorMes,
    getCantidadReportesPorAnnio
}