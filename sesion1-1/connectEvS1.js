//  initdb --locale=C -E UTF-8 /usr/local/var/postgresql@14
//To start postgresql@14 now and restart at login:
//   brew services start postgresql@14
// Or, if you don't want/need a background service you can just run:
//   /usr/local/opt/postgresql@14/bin/postgres -D /usr/local/var/postgresql@14

//brew services start posgresql
//psql postgres
//postgresClave

import pg from 'pg'
import {config} from "dotenv";
config();

const { Client } = pg;
console.log(Client);

const { USER, HOST, DATABASE, PASSWORD, PORT } = process.env;

const cliente = new Client({
    user: USER,
    host: HOST,
    database: DATABASE,
    password: PASSWORD,
    port: PORT
})

cliente.connect();

cliente.query('SELECT NOW()', (err, res)=>{
    //console.log(err,res);
    console.log(res.rows);
    console.log('----')
    console.log((res)? res.rows : err)
    cliente.end();
})