const BD = require('../database/config');
const { response, request } = require('express');




// ADD REGISTRO ENTRADA

const agregarRegistroEntrada = async (req = request, res = response) => {

    const { CEDULA_CLIENTE, AREA_DESTINO, MOTIVO_VISITA, HORA, FECHA } = req.body;
    const sql = "INSERT INTO REGISTRO_ENTRADA (CEDULA_CLIENTE, AREA_DESTINO, MOTIVO_VISITA, HORA, FECHA) VALUES (:CEDULA_CLIENTE, :AREA_DESTINO, :MOTIVO_VISITA, :HORA, TO_DATE(:FECHA))";

    try {

        await BD.dbConnection(sql, [CEDULA_CLIENTE, AREA_DESTINO, MOTIVO_VISITA, HORA, FECHA ], true);

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
    agregarRegistroEntrada
}