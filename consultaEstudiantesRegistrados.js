// 4. Crear una función asíncrona para obtener por consola todos los estudiantes
// registrados.
const { Client } = require('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    database: 'alwaysmusic_db',
    password: 'espinoza',
    port: 5432,
}

const client = new Client(config);

async function estudiantesRegistrados() {
    const res = await client.query("select * from estudiantes");
    console.log("Registro: ", res.rows);
}
estudiantesRegistrados()
    //.then(() => consulta())
    .then(() => client.end());

module.exports = estudiantesRegistrados