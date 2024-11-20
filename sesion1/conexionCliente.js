const {Client} = require('pg');

//Instanciando Client para efectuar una conexión

const cliente = new Client({
    user : 'postgres',
    host : 'localhost',
    database: 'movies',
    password: 'root',
    port: '5432',

})

cliente.connect();
cliente.consulta = cliente.query("SELECT * FROM MOVIES");
console.log(consulta);