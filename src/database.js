const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: process.env.HOST_DB,
    database: process.env.DB,
    user:process.env.USER_DB,
    password:process.env.PASS_DB
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('DB conected');
    }
});

module.exports = conexion;