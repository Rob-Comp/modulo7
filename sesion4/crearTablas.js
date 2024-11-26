import pg from 'pg';
import {config} from 'dotenv';

const {Pool} = pg;
config();

const {USER, HOST, PASSWORD, DATABASE, PORT} = process.env;

const pool = new Pool({
    user: USER,
    password: PASSWORD,
    database: DATABASE,
    host: HOST,
    port: PORT,
});

//Creando las tablas del proyecto

const crearTablas = async () => {
    try {
        console.log(`<--- Creando tablas --->`);

        // language=SQL format=false
        await pool.query(`CREATE TABLE IF NOT EXISTS vehiculos
                    (
        id SERIAL PRIMARY KEY,
        marca VARCHAR(50) NOT NULL,
        modelo VARCHAR(50) NOT NULL,
        patente VARCHAR(6) NOT NULL
    )`);
    } catch (err) {
        console.log(err);
    } finally {
        pool.end(() =>
            console.log(`<--- Se cerró la conexión a la DB --->`));
    }
};
crearTablas();