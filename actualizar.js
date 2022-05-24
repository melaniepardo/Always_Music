//5. Crear una función asíncrona para actualizar los datos de un estudiante en la base de datos.
const { Client } = require('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    database: 'alwaysmusic_db',
    password: 'espinoza',
    port: 5432,
}

const client = new Client(config);

async function actualizar() {
    const res = await client.query(
        "UPDATE estudiantes SET nivel = '10' WHERE rut = '12.345.678-9' RETURNING*; "
    );
    console.log('Estudiante editado con éxito', res.rows[0]);
    client.end();
}
actualizar();

module.exports = actualizar