const BD = require('../database/config');
const { response, request } = require('express');

const getRoles= async (req = request, res = response)=>{

    const sql = 'SELECT * FROM ROLES';
    const roles = [];

    try {

        let dbresponse = await BD.dbConnection(sql, [], false);

        dbresponse.rows.map((data)=>{
            const rol = {}
            dbresponse.metaData.map(({name}, index)=>{
                rol[name] = data[index];
            })
            roles.push(rol);
        });
        
        return res.json({
            OK:true,
            ROLES: roles
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
    const sql = 'SELECT R.ID_ROL, UR.NOMBRE_ROL FROM USUARIOS_ROLES UR JOIN ROLES R ON UR.NOMBRE_ROL = R.NOMBRE_ROL WHERE UR.CEDULA_USUARIO = :CEDULA_USUARIO';
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
            ROLES: roeles_usuarios
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
    getRoles,
    getRolesUsuarios
}