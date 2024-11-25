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
}).connect();

//https://github.com/Rob-Comp/modulo7