const BD = require('../database/config');
const { response, request } = require('express');


const agregarArea = async (req = request, res = response)=>{
    const {NOMBRE_AREA, DESCRIPCION_AREA, FECHA} = req.body;

    const sql = 'INSERT INTO AREAS VALUES (IDX_AREA_SEQ.NEXTVAL, :NOMBRE_AREA, :DESCRIPCION_AREA, :FECHA)';

    try {

        await BD.dbConnection(sql, [NOMBRE_AREA, DESCRIPCION_AREA, FECHA], true);

        return res.status(201).json({
            OK: true,
            NOMBRE_AREA
        });

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            OK: false,
            MSG: 'Por favor hable con el administrador'
        });
    }
}


module.exports = {
    agregarArea
}