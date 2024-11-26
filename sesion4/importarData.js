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
const crearVehiculo = async () => {
    console.log('<--- Correcta conexión a la base de datos --->');
    try {

        const query = `
            INSERT INTO vehiculos(marca, modelo, patente)
            VALUES ($1, $2, $3) RETURNING *
        `;

        const [_marca, _modelo, _patente] = process.argv.splice(2);
        const res = await pool.query(query, [_marca, _modelo, _patente]);
        console.log('registro exitoso');
        // console.log(process.argv.slice(2));
    } catch (err) {
        console.error('No se pudo hacer la creación', err);
    } finally {
        await pool.end(() => {
            console.log('<--- Se cerró la conexión a la base de datos --->')
        });
    }
}
crearVehiculo();