const BD = require('../database/config');
const { response, request } = require('express');


const getTramitesAreas = async (req = request, res = response)=>{

    const ID_AREA = req.header('id-area');

    const sql = 'SELECT COLUMN_VALUE AS IDS_TRAMITES_ASOCIADOS FROM TRAMITES_AREAS, TABLE(IDS_TRAMITES_ASOCIADOS) WHERE ID_AREA = :ID_AREA';

    const LISTA_IDS_TRAMITES_ASOCIADOS = [];

    try {

        let dbresponse = await BD.dbConnection(sql, [ID_AREA], false);

        dbresponse.rows.map(data=>{
            LISTA_IDS_TRAMITES_ASOCIADOS.push({
                ID_TRAMITE: data[0]
            });
        })

        res.status(200).json({
            OK: true,
            LISTA_IDS_TRAMITES_ASOCIADOS
        });

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            OK: false,
            MSG: 'Por favor hable con el administrador'
        });
    }

};

const updateTramitesAreas = async (req = request, res = response)=>{

    const {ID_AREA, IDS_TRAMITES_ASOCIADOS} = req.body;

    let idsBinds = IDS_TRAMITES_ASOCIADOS.join(', ');

    let sql = `UPDATE TRAMITES_AREAS SET IDS_TRAMITES_ASOCIADOS = LISTA_TRAMITES_ASO(${idsBinds}) WHERE ID_AREA = :ID_AREA`;

    try {

        let dbresponse = await BD.dbConnection(sql, [ID_AREA] , true);

        if(dbresponse.rowsAffected === 0){
            return res.status(400).json({
                OK: false
            });
        }

        return res.status(200).json({
            OK: true
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            OK: false,
            MSG: 'Por favor hable con el administrador'
        });
    }


    // for(let i = 0; i < IDS_TRAMITES_ASOCIADOS.length; i++){
    //     let binds = [
    //         IDS_TRAMITES_ASOCIADOS[i],
    //         ID_AREA
    //     ];


    //     try {

    //         let dbresponse = await BD.dbConnection(sql, binds , true);
    //         console.log(dbresponse);
            
    //     } catch (error) {
    //                 console.log(error);
    //     return res.status(500).json({
    //         OK: false,
    //         MSG: 'Por favor hable con el administrador'
    //     });
    //     }


    // }

}

module.exports = {
    getTramitesAreas,
    updateTramitesAreas
}