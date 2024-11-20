import pg from 'pg';
const { Pool } = pg;

// efectuando una conexión vía URI
const connectionString = 'postgresql://:root@localhost:5432/movies';

const pool = new Pool({connectionString})

const ejecutarConsulta = async ()=> {
    try{
        const consulta = await pool.query("SELECT * FROM genres")
        console.log(consulta.rows)
    }catch (error){
        console.error()
    }
}