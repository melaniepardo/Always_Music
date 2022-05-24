// 2. Crear una función asíncrona para registrar un nuevo estudiante
const { Client } = require('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    database: 'alwaysmusic_db',
    password: 'espinoza',
    port: 5432,
}

const client = new Client(config);

async function ingresar() {
    const res = await client.query(
        "insert into estudiantes (nombre, rut, curso, nivel) values ('Brian May', '12.345.678-9', 'guitarra', '7') RETURNING *; ");
    console.log('Estudiante agregado con éxito', res.rows);
    client.end();
}
ingresar();

module.exports = ingresar