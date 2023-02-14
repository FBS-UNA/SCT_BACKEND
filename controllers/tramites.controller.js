const BD = require('../database/config');
const { response, request } = require('express');



const agregaTramite = async (req = request, res = response)=>{
    const {NOMBRE_TRAMITE, DESCRIPCION_TRAMITE, FECHA} = req.body;

    const sql = "INSERT INTO TRAMITES (NOMBRE_TRAMITE, DESCRIPCION_TRAMITE, FECHA) VALUES (:NOMBRE_TRAMITE, :DESCRIPCION_TRAMITE, TO_DATE(:FECHA, 'YYYY-MM-DD'))";

    try {
        
        await BD.dbConnection(sql, [NOMBRE_TRAMITE, DESCRIPCION_TRAMITE, FECHA], true);

        return res.status(201).json({
            OK: true,
            NOMBRE_TRAMITE
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
    agregaTramite
}