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

//Actualizar datos en la tabla
const modificarVehiculo = async () => {
    console.log('<--- Correcta conexión a la base de datos --->');
    try {

        const query = `
            UPDATE vehiculos 
            SET marca = $1, modelo = $2, patente = $3
            WHERE id = $4
        `;

        const [_marca, _modelo, _patente, _id] = process.argv.splice(2);
        const res = await pool.query(query, [_marca, _modelo, _patente, _id]);
        console.log('Registro actualizado exitosamente');

    } catch (err) {
        console.error('No se pudo hacer la modificación', err);
    } finally {
        await pool.end(() => {
            console.log('<--- Se cerró la conexión a la base de datos --->')
        });
    }
}
modificarVehiculo();