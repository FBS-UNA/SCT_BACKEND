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

const getRolesUsuarios= async (req = request, res = response)=>{

    const { CEDULA_USUARIO } = req.body;
    const sql = 'SELECT NOMBRE_ROL FROM USUARIOS_ROLES WHERE CEDULA_USUARIO = :CEDULA_USUARIO';
    const roeles_usuarios = [];

    try {

        let dbresponse = await BD.dbConnection(sql, [CEDULA_USUARIO], false);

        dbresponse.rows.map((data)=>{
            const rol_usuario = {}
            dbresponse.metaData.map(({name}, index)=>{
                rol_usuario[name] = data[index];
            })
            roeles_usuarios.push(rol_usuario);
        });
        
        return res.json({
            OK:true,
            USUARIOS: roeles_usuarios
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
    getUsuarios,
    getRolesUsuarios
}