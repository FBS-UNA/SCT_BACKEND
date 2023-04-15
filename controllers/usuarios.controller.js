const BD = require('../database/config');
const { response, request } = require('express');


const getUsuarios= async (req = request, res = response)=>{

    const sql = 'SELECT * FROM USUARIOS';
    const usuarios = [];

    try {

        let dbresponse = await BD.dbConnection(sql, [], false);

        dbresponse.rows.map((data)=>{
            const usuario = {}
            dbresponse.metaData.map(({name}, index)=>{
                usuario[name] = data[index];
            })
            usuarios.push(usuario);
        });
        
        return res.json({
            OK:true,
            USUARIOS: usuarios
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
    getUsuarios
}