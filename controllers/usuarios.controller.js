const BD = require('../database/config');
const { response, request } = require('express');

const getUsuario= async (req = request, res = response)=>{

    const sql = 'SELECT * FROM USUARIOS';
    const usuarios = [];

    try {

        let dbresponse = await BD.dbConnection(sql, [], false);

        dbresponse.rows.map((data)=>{
            const usuario = {}
            dbresponse.metaData.map(({name}, index)=>{
                usuario[name] = data[index];
            })
            usuarios.push(area);
        });


        return res.json({
            OK:true,
            USUARIOS: areas
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
    getUsuario
}