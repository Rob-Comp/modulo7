import {pool} from './conexion.js';

export default class VehiculoClass {
     // crear el método para crear las tablas
        static crearTablas = async () => {
            try {
                console.log(`<--- Creando tablas --->`);
                await pool.query('BEGIN');
                await pool.query('')
                pool.query(`
                    CREATE TABLE IF NOT EXISTS vehiculos
                    (
                        id
                        SERIAL PRIMARY KEY NOT NULL,
                        marca VARCHAR (50) NOT NULL ,
                        modelo VARCHAR (50) NOT NULL,
                        patente VARCHAR(6) UNIQUE NOT NULL
                        )`)

            } catch (error) {
                console.log(error);
            }finally {
                await pool.query('COMMIT')
                console.log(`<--- Tablas Creadas satisfactoriamente --->`);
            }

        }
    constructor(marca, modelo, patente){
    this._marca = marca;
    this._modelo = modelo;
    this._patente = patente;
    }
    insertar = async ()=>{
        try {
            const datos = this;
            await pool.query('BEGIN');
            const query = `INSERT INTO vehiculos (marca,modelo,patente) VALUES ($1,$2,$3) RETURNING *`;
            const res = await pool.query(query,[datos._marca, datos._modelo, datos._patente]);

        } catch (error) {
            console.error(`Ha ocurrio un error: ${error.message}`);
            await pool.query('ROLLBACK');
            return false;
        }finally{
            console.log('Registro insertado de manera correcta');
            await pool.query('COMMIT')
            pool.end(()=>console.log('Se cerro la conexión a la Base de Datos'));
            return true;

        }
    }
    }
