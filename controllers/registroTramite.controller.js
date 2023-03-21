const BD = require('../database/config');
const { response, request } = require('express');


// ADD REGISTRO TRAMITE

const agregarRegistroTramite = async (req = request, res = response) => {

    const { CEDULA_CLIENTE, TRAMITE, DESCRIPCION, HORA, FECHA } = req.body;
    const FECHA_Y_HORA = FECHA + ' ' + HORA;

    const sql = "INSERT INTO REGISTRO_TRAMITE (CEDULA_CLIENTE, TRAMITE, DESCRIPCION, FECHA_Y_HORA) VALUES (:CEDULA_CLIENTE, :TRAMITE, :DESCRIPCION, TO_DATE(:FECHA_Y_HORA, 'DD/MM/YYYY HH24:MI:SS'))";


    try {

        await BD.dbConnection(sql, [CEDULA_CLIENTE, TRAMITE, DESCRIPCION, FECHA_Y_HORA ], true);

        return res.status(201).json({
            OK: true
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
    agregarRegistroTramite
}