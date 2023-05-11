const BD = require('../database/config');
const { response, request } = require('express');


const getUsuarios= async (req = request, res = response)=>{

    const sql = 'SELECT * FROM VISTA_USUARIOS_ROLES';
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

// PETICION PARA ASIGNARLE ROLES AL USUARIO
    asignarRolesUsuario = async (req = request, res = response) => {
    const { CEDULA_USUARIO, ROLES } = req.body;
  
    try {
      for (const rol of ROLES) {
        const { NOMBRE_ROL } = rol;
        const sql = 'INSERT INTO USUARIOS_ROLES (NOMBRE_ROL, CEDULA_USUARIO) VALUES (:NOMBRE_ROL, :CEDULA_USUARIO)';
        await BD.dbConnection(sql, [NOMBRE_ROL, CEDULA_USUARIO], true);
      }
  
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
  
  

module.exports = {
    getUsuarios,
}