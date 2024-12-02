import pg from 'pg';
import {config} from 'dotenv';

const {Pool} = pg;
config();

const {USER, HOST, PASSWORD, DATABASE, PORT} = process.env;

export const pool = new Pool({
    user: USER,
    password: PASSWORD,
    database: DATABASE,
    host: HOST,
    port: PORT,
})