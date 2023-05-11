const BD = require('../database/config');
const { response, request } = require('express');

const getRoles = async (req = request, res = response) => {

    const sql = 'SELECT * FROM ROLES';
    const roles = [];

    try {

        let dbresponse = await BD.dbConnection(sql, [], false);

        dbresponse.rows.map((data) => {
            const rol = {}
            dbresponse.metaData.map(({ name }, index) => {
                rol[name] = data[index];
            })
            roles.push(rol);
        });

        return res.json({
            OK: true,
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


const getRolesUsuarios = async (req = request, res = response) => {

    const { CEDULA_USUARIO } = req.body;
    const sql = 'SELECT R.ID_ROL, UR.NOMBRE_ROL FROM USUARIOS_ROLES UR JOIN ROLES R ON UR.NOMBRE_ROL = R.NOMBRE_ROL WHERE UR.CEDULA_USUARIO = :CEDULA_USUARIO';
    const roeles_usuarios = [];

    try {

        let dbresponse = await BD.dbConnection(sql, [CEDULA_USUARIO], false);

        dbresponse.rows.map((data) => {
            const rol_usuario = {}
            dbresponse.metaData.map(({ name }, index) => {
                rol_usuario[name] = data[index];
            })
            roeles_usuarios.push(rol_usuario);
        });

        return res.json({
            OK: true,
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


const updateRolesUsuario = async (req = request, res = response) => {
    const { CEDULA_USUARIO, NOMBRE_ROL } = req.body;

    const sql = 'INSERT INTO USUARIOS_ROLES (NOMBRE_ROL, CEDULA_USUARIO) VALUES (:NOMBRE_ROL, :CEDULA_USUARIO)';

    try {

        await BD.dbConnection(sql, [NOMBRE_ROL, CEDULA_USUARIO], true);


        return res.json({
            OK: true,
            MSG: 'Roles asignados correctamente al usuario',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            OK: false,
            MSG: 'Por favor hable con el administrador',
        });
    }
};


const deleteRolesUsuario = async (req = request, res = response) => {
    const { CEDULA_USUARIO } = req.body;

    const sql = 'DELETE FROM USUARIOS_ROLES WHERE CEDULA_USUARIO = :CEDULA_USUARIO';

    try {

        let dbresponse = await BD.dbConnection(sql, [CEDULA_USUARIO], true);

        /*if (dbresponse.rowsAffected === 0) {
            return res.status(400).json({
                OK: false,
                MSG: 'Este Usuario no es válido'
            });
        }*/

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
}




module.exports = {
    getRoles,
    getRolesUsuarios,
    updateRolesUsuario,
    deleteRolesUsuario
}