const moongoose = require('mongoose');
require('dotenv').config();

const conectarDB = async () => {
    try {
        await moongoose.connect(process.env.MONGO_URL);
        console.log('*****CONEXION EXITOSA*****');
    } catch (error) {
        console.error('ERROR DE CONEXION', error);
    }
}

module.exports = conectarDB;