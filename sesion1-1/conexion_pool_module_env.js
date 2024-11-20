//Trabajando con variables de entorno - process.env
// import dotenv from 'dotenv';
// dotenv.config();

// import 'dotenv/config';

import { config } from 'dotenv';
config();

//Como hago para traer esas variables desde process.env
const {USER,HOST,DATABASE,PASSWORD,PORT} = process.env;

//console.log(USER);


// import pg from 'pg';
// const {Pool} = pg;


// //Instanciando Client - Para efectuar una conexión

// const pool = new Pool({
// user: 'postgres',
// host: 'localhost',
// database:'movies',
// password: 'root',
// port:5432
// })

// //Cuando trabajamos con BD - Asyncrona
// const ejecutarConsulta = async () =>{
//     try {
//         // cliente.connect();
//         // const consulta = await cliente.query("SELECT * FROM genres WHERE id = 5");
//         const consulta = await pool.query("SELECT * FROM genres");
//         console.log(consulta.rows);        
//     } catch (error) {
//         console.log(Ufff ha ocurrido un error: ${error});
//     }finally{
//        pool.end();
//     }
// }

// //Invocarla
// ejecutarConsulta();