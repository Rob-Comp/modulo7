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
})

//Insertando datos en la tabla
const listarVehiculos = async () => {
    console.log('<--- Correcta conexión a la base de datos --->');
    try {
        const query = `
            SELECT *
            FROM vehiculos
        `;
        const res = await pool.query(query);

        console.log(res.rows);


    } catch (err) {
        console.error('No se pudo', err);
    } finally {
        await pool.end(() => {
            console.log('<--- Se cerró la conexión a la base de datos --->')
        });
    }
}
listarVehiculos();